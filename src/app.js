import express from "express";
import cors from "cors";
import connectDB from "./DB/connection.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import wishlistRoutes from "./routes/wishlist.routes.js";
import orderRoutes from "./routes/order.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import { stripeWebhook } from "./controllers/payment.controller.js";

import auth from "./middleware/auth.middleware.js";

const app = express();

// app.use(cors({ origin: [process.env.CLIENT_URL, process.env.ADMIN_URL] }));
app.use(cors());

// Stripe Webhook
app.post(
  "/api/payments/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", auth, cartRoutes);
app.use("/wishlists", auth, wishlistRoutes);
app.use("/orders", auth, orderRoutes);
app.use("/payments", paymentRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "E-Commerce API is running",
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
