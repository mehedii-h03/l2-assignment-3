# 📚 Library Management API

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
</div>

<div align="center">
  <h3>🚀 A modern, feature-rich Library Management System API</h3>
  <p>Built with Express.js, TypeScript, and MongoDB for efficient book and borrowing management</p>
</div>

---

## ✨ Features

<table>
  <tr>
    <td>📖</td>
    <td><strong>CRUD Operations</strong><br/>Complete book management with create, read, update, delete</td>
  </tr>
  <tr>
    <td>🔄</td>
    <td><strong>Borrowing System</strong><br/>Smart borrowing with business rules enforcement</td>
  </tr>
  <tr>
    <td>🔍</td>
    <td><strong>Advanced Filtering</strong><br/>Filtering, sorting, and pagination for books</td>
  </tr>
  <tr>
    <td>📊</td>
    <td><strong>Analytics</strong><br/>Aggregation for borrowed summary reports</td>
  </tr>
  <tr>
    <td>🛡️</td>
    <td><strong>Validation</strong><br/>Robust validation using Zod and Mongoose</td>
  </tr>
  <tr>
    <td>🎯</td>
    <td><strong>Error Handling</strong><br/>Centralized global error handler with 404 support</td>
  </tr>
</table>

---

## 🛠️ Technology Stack

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="50" height="50"/>
        <br/><strong>Node.js</strong>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="50" height="50"/>
        <br/><strong>Express.js</strong>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="50" height="50"/>
        <br/><strong>TypeScript</strong>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="50" height="50"/>
        <br/><strong>MongoDB</strong>
      </td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/29882522?s=200&v=4" width="50" height="50"/>
        <br/><strong>Zod</strong>
      </td>
    </tr>
  </table>
</div>

---

## 📂 Project Structure

```
📁 src/
├── 📄 app.ts
├── 📁 models/
│   ├── 📄 book.model.ts
│   └── 📄 borrow.model.ts
├── 📁 routes/
│   ├── 📄 book.route.ts
│   └── 📄 borrow.route.ts
├── 📁 controllers/
│   ├── 📄 book.controller.ts
│   └── 📄 borrow.controller.ts
├── 📁 validations/
│   └── 📄 book.validation.ts
├── 📁 middlewares/
│   ├── 📄 globalErrorHandler.ts
│   └── 📄 notFoundHandler.ts
├── 📁 utils/
│   └── 📄 handleZodError.ts
└── 📄 server.ts
```

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mehedii-h03/l2-assignment-3.git
cd library-management-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL=mongodb+srv://<your-mongodb-uri>
PORT=5000
```

### 4️⃣ Run the Application

<table>
  <tr>
    <th>🔧 Development</th>
    <th>🚀 Production</th>
  </tr>
  <tr>
    <td>
      <code>npm run dev</code>
    </td>
    <td>
      <code>npm run build</code><br/>
      <code>npm start</code>
    </td>
  </tr>
</table>

---

## 📑 API Endpoints

### 📚 Book Management

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Status</th>
  </tr>
  <tr>
    <td><code>POST</code></td>
    <td><code>/api/books</code></td>
    <td>Create a new book</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><code>GET</code></td>
    <td><code>/api/books</code></td>
    <td>Get all books (with filter/sort/limit)</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><code>GET</code></td>
    <td><code>/api/books/:id</code></td>
    <td>Get a book by ID</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><code>PUT</code></td>
    <td><code>/api/books/:id</code></td>
    <td>Update a book</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><code>DELETE</code></td>
    <td><code>/api/books/:id</code></td>
    <td>Delete a book</td>
    <td>✅</td>
  </tr>
</table>

#### 🔍 Query Example

```http
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

### 🔄 Borrow Management

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Status</th>
  </tr>
  <tr>
    <td><code>POST</code></td>
    <td><code>/api/borrow</code></td>
    <td>Borrow a book</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><code>GET</code></td>
    <td><code>/api/borrow</code></td>
    <td>Borrow summary (aggregation)</td>
    <td>✅</td>
  </tr>
</table>

---

## 🛡️ Error Handling

Our API provides comprehensive error handling with detailed error messages:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Copies must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}
```

---

## ⚙️ Business Logic

> **Smart Inventory Management**
>
> - When copies reach `0` after borrowing, `available` is automatically set to `false`
> - Borrow aggregation returns total borrowed quantity with book details (title, ISBN)

---

## 📊 Sample API Response

### Borrow Summary Aggregation

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    },
    {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  ]
}
```
