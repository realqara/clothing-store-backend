# 🛍️ Clothing Store Backend

## 📌 Project Overview
This project is a **MongoDB-based backend** for a Clothing Store application. It provides RESTful API endpoints for managing **users, products, and orders** while ensuring authentication, authorization, and query optimization.

### 🚀 Features
- **CRUD Operations:** Create, Read, Update, Delete for Users, Products, and Orders
- **Authentication & Authorization:** JWT-based authentication
- **Query Optimization:** Indexing for faster searches
- **Data Collection:** Fetches product data from an external API
- **Security:** Protects API endpoints with authentication middleware
- **MongoDB Database:** Three collections (`users`, `products`, `orders`) with relationships

---

## 📂 Project Structure
```plaintext
/clothing-store-backend/
├── models/              # Mongoose Schemas
│   ├── User.js          # User Model
│   ├── Product.js       # Product Model
│   ├── Order.js         # Order Model
├── routes/              # Express Routes
│   ├── userRoutes.js    # User APIs
│   ├── productRoutes.js # Product APIs
│   ├── orderRoutes.js   # Order APIs
├── middleware/          # Middleware for authentication
│   ├── authMiddleware.js
├── server.js            # Main Backend File
├── .env                 # Environment Variables
├── package.json         # Dependencies & Scripts
├── README.md            # Documentation
```

---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR-USERNAME/clothing-store-backend.git
cd clothing-store-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add:
```sh
MONGO_URI=mongodb://localhost:27017/clothing_store
PORT=5000
JWT_SECRET=your_jwt_secret
EXTERNAL_API=https://fakestoreapi.com/products
```

### 4️⃣ Start the Server
```sh
npm start
```

The backend runs at **`http://localhost:5000`**.

---

## 📡 API Endpoints

### **🔹 User Routes** (`/api/users`)
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `POST` | `/register`  | Register a new user |
| `POST` | `/login`     | Login a user |
| `GET`  | `/`          | Get all users (Protected) |

### **🔹 Product Routes** (`/api/products`)
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/`          | Fetch all products |
| `POST` | `/`         | Add a new product (Protected) |

### **🔹 Order Routes** (`/api/orders`)
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `POST` | `/`          | Create an order (Protected) |
| `GET`  | `/user/:id`  | Get orders for a user (Protected) |

---

## 🛠 Database Schema
### **Users Collection** (`users`)
```json
{
  "user_id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "orders": []
}
```
### **Products Collection** (`products`)
```json
{
  "product_id": 1,
  "name": "T-Shirt",
  "price": 19.99,
  "category": "Clothing"
}
```
### **Orders Collection** (`orders`)
```json
{
  "order_id": 1,
  "user_id": 1,
  "items": [{ "product_id": 1, "quantity": 2 }]
}
```

---

## 🔥 Optimization & Best Practices
- **Indexes Added:**
  ```sh
  db.users.createIndex({ email: 1 }, { unique: true });
  db.products.createIndex({ price: -1 });
  db.orders.createIndex({ user_id: 1 });
  ```
- **JWT Authentication** ensures secure access.
- **Middleware restricts unauthorized users.**

---

## 📝 Contributors
- **Your Name** - Muzraimova Aiya
- **Teammate Name** - Shanova Dilnaz

## 🏆 Future Improvements
- Add payment gateway integration
- Enhance search functionality
- Implement role-based access control

---

## 📜 License
This project is licensed under the MIT License.

---

🔥


