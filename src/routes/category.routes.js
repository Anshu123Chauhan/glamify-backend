import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protect, createCategory);
router.get("/getAll", protect, getAllCategories);

export default router;
