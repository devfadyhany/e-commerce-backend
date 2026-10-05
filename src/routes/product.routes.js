import express from "express";

import {
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
  getProducts,
  addReview,
  getReviews,
  deleteReview,
} from "../controllers/product.controller.js";

import adminPerms from "../middleware/admin.middleware.js";
import auth from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/", auth, adminPerms, upload.array("images", 5), CreateProduct);
router.get("/", GetAllProducts);
router.get("/:id", GetProductById);
router.delete("/:id", auth, adminPerms, DeleteProduct);
router.patch(
  "/update/:id",
  auth,
  adminPerms,
  upload.array("images", 5),
  UpdateProduct,
);

// Search + Filter + Sort + Pagination
router.get("/search", getProducts);

router.get("/:id/reviews", getReviews);
router.post("/:id/reviews", auth, addReview);
router.delete("/:id/reviews/:rid", auth, deleteReview);

export default router;
