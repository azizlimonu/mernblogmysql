import express from "express";
// Controller
import { getUsers } from "../controllers/usersController.js";

const router = express.Router();

// Get
router.post("/",getUsers);

export default router;
