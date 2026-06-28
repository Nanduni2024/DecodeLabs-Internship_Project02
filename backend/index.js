const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend API with Database Integration is running!');
});

// GET /items: Retrieve all items from database
app.get('/items', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
});

// POST /items: Add a new item to database
app.post('/items', (req, res) => {
    const { name } = req.body;
    
    // Input Validation
    if (!name) {
        return res.status(400).json({ error: 'name is required' });
    }
    
    db.run('INSERT INTO items (name) VALUES (?)', [name], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Return the newly created item
        res.status(201).json({ message: 'Item added!', item: { id: this.lastID, name } });
    });
});

// PUT /items/:id: Update an item in database
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'name is required to update' });
    }
    
    db.run('UPDATE items SET name = ? WHERE id = ?', [name, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated!', item: { id, name } });
    });
});

// DELETE /items/:id: Remove an item from database
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    db.run('DELETE FROM items WHERE id = ?', id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
