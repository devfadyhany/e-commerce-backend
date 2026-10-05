import express from "express";

import {
  sendOtp,
  verifyOtp,
  login,
  getMe,
  logout,
  forgotPassword,
  verifyForgotPasswordOtp,
  changeUserRole,
} from "../controllers/auth.controller.js";

import auth from "../middleware/auth.middleware.js";
import validate from "../middleware/validation.middleware.js";
import adminPerms from "../middleware/admin.middleware.js";

import { loginSchema } from "../validation/auth.validation.js";

const router = express.Router();

router.post("/register/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

router.post("/forgotpassword/send-otp", forgotPassword);
router.post("/forgotpassword/verify-otp", verifyForgotPasswordOtp);

router.post("/login", validate(loginSchema), login);
router.get("/me", auth, getMe);
router.post("/logout", auth, logout);

router.patch("/change-role", auth, adminPerms, changeUserRole);

export default router;
