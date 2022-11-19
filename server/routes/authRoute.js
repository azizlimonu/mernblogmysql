import express from "express";
// Controller
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

export default router;
