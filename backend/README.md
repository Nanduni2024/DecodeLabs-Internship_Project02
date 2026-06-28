# Project 2: Backend API Development

## Description
This is a simple backend API built with Node.js and Express to manage a list of "Items". It satisfies the requirements for Project 2 and includes the optional challenges for input validation, updating, and deleting items.

## Folder Structure
- `node_modules/`: Contains dependencies (Express).
- `index.js`: The main Express application file containing the server setup and endpoints.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Locks the dependency versions.
- `README.md`: This file.

## Setup & Run Instructions

1. Ensure you have Node.js installed.
2. Open a terminal in this `backend` folder.
3. Install the dependencies (if not already done):
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
5. You should see: `Server is running on http://localhost:3000`

## API Endpoints Testing Guide

You can test these endpoints using Postman or Insomnia.

### 1. Health Check
- **Method:** `GET`
- **URL:** `http://localhost:3000/`
- **Expected Response:** `Backend API is running!`

### 2. Get All Items
- **Method:** `GET`
- **URL:** `http://localhost:3000/items`
- **Expected Response:** JSON array of items (Status 200).

### 3. Add a New Item
- **Method:** `POST`
- **URL:** `http://localhost:3000/items`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "id": 3,
    "name": "Item Three"
  }
  ```
- **Expected Response:** Status 201 with success message.

### 4. Update an Item (Optional Challenge)
- **Method:** `PUT`
- **URL:** `http://localhost:3000/items/1`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "Updated Item One"
  }
  ```
- **Expected Response:** Status 200 with the updated item.

### 5. Delete an Item (Optional Challenge)
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/items/2`
- **Expected Response:** Status 200 with the deleted item.

## Postman Screenshots
*(Add your Postman screenshots here before final submission!)*
