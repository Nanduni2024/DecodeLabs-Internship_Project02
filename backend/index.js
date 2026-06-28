const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

app.get('/', (req, res) => {
    res.send('Backend API is running!');
});

// GET /items: Retrieve all items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// POST /items: Add a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    
    // Input Validation (Optional Challenge)
    if (!newItem.id || !newItem.name) {
        return res.status(400).json({ error: 'id and name are required' });
    }
    
    // Check if ID already exists
    const exists = items.some(item => item.id === newItem.id);
    if (exists) {
        return res.status(400).json({ error: 'Item with this id already exists' });
    }

    items.push(newItem);
    res.status(201).json({ message: 'Item added!', item: newItem });
});

// PUT /items/:id: Update an item (Optional Challenge)
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedData = req.body;
    
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }
    
    // Basic validation
    if (!updatedData.name) {
        return res.status(400).json({ error: 'name is required to update' });
    }
    
    items[index] = { ...items[index], name: updatedData.name };
    res.status(200).json({ message: 'Item updated!', item: items[index] });
});

// DELETE /items/:id: Remove an item (Optional Challenge)
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }
    
    const deletedItem = items.splice(index, 1);
    res.status(200).json({ message: 'Item deleted!', item: deletedItem[0] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
