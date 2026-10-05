import express from "express";

import {
  createOrder,
  getOrders,
  getOrderById,
  cancelOrder,
} from "../controllers/order.controller.js";
import {
  getAllCarts,
  getAllOrders,
  getDashboard,
  getOrderByIdAdmin,
  updateOrderStatus,
} from "../controllers/admin.controller.js";

import adminPerms from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/my", getOrders);
router.get("/my/:id", getOrderById);
router.patch("/my/:id/cancel", cancelOrder);

router.get("/admin/dashboard", adminPerms, getDashboard);
router.get("/admin/carts", adminPerms, getAllCarts);
router.get("/admin", adminPerms, getAllOrders);
router.get("/admin/:id", adminPerms, getOrderByIdAdmin);
router.patch("/admin/:id/status", adminPerms, updateOrderStatus);

export default router;
