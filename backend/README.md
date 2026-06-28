# Project 3: Database Integration

## Description
This is the backend API built with Node.js, Express, and **SQLite** to manage a list of "Items". It satisfies the requirements for Project 3 by replacing the temporary in-memory data array with a permanent SQLite database, ensuring data longevity through proper CRUD operations.

## Folder Structure
- `node_modules/`: Contains dependencies (Express, sqlite3).
- `index.js`: The main Express application handling the endpoints.
- `db.js`: Database configuration and schema initialization.
- `database.sqlite`: The SQLite database file (auto-generated when server starts).
- `package.json`: Contains project metadata and dependencies.
- `README.md`: This documentation file.

## Setup & Run Instructions

1. Ensure you have Node.js installed.
2. Open a terminal in this `backend` folder.
3. Install the dependencies (now including sqlite3):
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   *or*
   ```bash
   node index.js
   ```
5. You should see: 
   ```text
   Connected to the SQLite database.
   Items table is ready.
   Server is running on http://localhost:3000
   ```

## API Endpoints Testing Guide

You can test these endpoints using Postman or Insomnia. Notice that data will now persist even if you stop and restart the server!

### 1. Health Check
- **Method:** `GET`
- **URL:** `http://localhost:3000/`
- **Expected Response:** `Backend API with Database Integration is running!`

### 2. Get All Items
- **Method:** `GET`
- **URL:** `http://localhost:3000/items`
- **Expected Response:** JSON array of items from the database (Status 200).

### 3. Add a New Item
- **Method:** `POST`
- **URL:** `http://localhost:3000/items`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "Database Item One"
  }
  ```
- **Expected Response:** Status 201 with success message and generated ID.

### 4. Update an Item
- **Method:** `PUT`
- **URL:** `http://localhost:3000/items/1`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "Updated Database Item"
  }
  ```
- **Expected Response:** Status 200 with the updated item.

### 5. Delete an Item
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/items/1`
- **Expected Response:** Status 200 with success message.

## Postman Screenshots
*(Add your Postman screenshots here before final submission!)*
