# E-Commerce Backend API

A RESTful E-Commerce Backend API built with **Node.js, Express.js, MongoDB, and Mongoose**.

The project provides backend services for an e-commerce platform, including authentication, user management, products, cart, wishlist, orders, payments, email services, and admin functionality.

## 🚀 Features

* User authentication and authorization
* JWT-based protected routes
* OTP verification
* Password reset and recovery
* User management
* Role-based access control
* Product management
* Product reviews and ratings
* Product image upload and management
* Shopping cart
* Wishlist
* Coupons and discounts
* Order management
* Stock management
* Payment integration
* Email notifications
* Admin dashboard and statistics
* Request validation using Joi
* Global error handling
* MongoDB transactions

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**
* **Joi**
* **Cloudinary**
* **Multer**
* **Nodemailer**
* **Stripe**
* **Morgan**
* **dotenv**
* **CORS**

## 📁 Project Structure

```text
src/
├── DB/
│   └── connection.js
│
├── config/
│   ├── cloudinary.js
│   └── stripe.js
│
├── controllers/
│   ├── admin.controller.js
│   ├── auth.controller.js
│   ├── cart.controller.js
│   ├── order.controller.js
│   ├── payment.controller.js
│   ├── product.controller.js
│   ├── user.controller.js
│   └── wishlist.controller.js
│
├── middleware/
│   ├── admin.middleware.js
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── upload.middleware.js
│   └── validation.middleware.js
│
├── models/
│   ├── Cart.model.js
│   ├── OTP.model.js
│   ├── Order.model.js
│   ├── Product.model.js
│   ├── User.model.js
│   └── Wishlist.model.js
│
├── routes/
│   ├── admin.routes.js
│   ├── auth.routes.js
│   ├── cart.routes.js
│   ├── order.routes.js
│   ├── payment.routes.js
│   ├── product.routes.js
│   ├── user.routes.js
│   └── wishlist.routes.js
│
├── templates/
│   └── emailTemplates.js
│
├── utils/
│   ├── coupons.js
│   ├── generateToken.js
│   ├── sendEmail.js
│   └── uploadToCloudinary.js
│
├── validation/
│   ├── auth.validation.js
│   ├── cart.validation.js
│   ├── order.validation.js
│   ├── product.validation.js
│   └── user.validation.js
│
├── app.js
└── index.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/AmalMansour19/e-commerce-backend.git
```

Navigate to the project directory:

```bash
cd e-commerce-backend
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the project root.

Use `.env.example` as a reference for the required environment variables.

> Never commit the actual `.env` file or any secret credentials to the repository.

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The API runs locally according to the configured `PORT` environment variable.

## 🔑 Authentication

The API uses **JWT authentication** for protected routes.

Attach the token to the request header:

```text
Authorization: Bearer <token>
```

Admin-only operations require the appropriate admin role.

## 🧩 Validation

Request data is validated using **Joi** before reaching the controllers.

Validation schemas are organized by module:

```text
validation/
├── auth.validation.js
├── cart.validation.js
├── order.validation.js
├── product.validation.js
└── user.validation.js
```

## 🛡️ Middleware

The project includes dedicated middleware for:

* Authentication
* Admin authorization
* Request validation
* File uploads
* Global error handling

## 🗄️ Database Models

The API uses the following Mongoose models:

* `User`
* `OTP`
* `Product`
* `Cart`
* `Wishlist`
* `Order`

## ☁️ File Uploads

Product images are handled using **Multer** and uploaded to **Cloudinary**.

## 📧 Email Services

The backend uses **Nodemailer** for email-related operations such as:

* OTP verification
* Password recovery
* Transactional emails

## 💳 Payments

The payment module provides integration with supported payment services and handles payment-related operations through dedicated controllers and routes.

## 🧪 API Testing

The API can be tested using **Postman**.

Recommended testing flow:

```text
Authentication
      ↓
Users
      ↓
Products
      ↓
Cart
      ↓
Wishlist
      ↓
Orders
      ↓
Payments
      ↓
Admin
```

## 👥 Team Project

This project was developed collaboratively as part of the **SEF Backend Training**.

The team worked on different backend modules while following a modular project structure and Git-based collaboration workflow.
