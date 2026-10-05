import express from "express";

import {
  getWishlists,
  addProduct,
  removeProduct,
  clearWishlist,
} from "../controllers/wishlist.controller.js";

import {
  getAllWishlists,
  getWishlistStats,
} from "../controllers/admin.controller.js";

import adminPerms from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/my", getWishlists);
router.post("/add/:productId", addProduct);
router.delete("/remove/:productId", removeProduct);
router.delete("/clear", clearWishlist);

router.get("/admin/all", adminPerms, getAllWishlists);
router.get("/admin/stats", adminPerms, getWishlistStats);

export default router;
