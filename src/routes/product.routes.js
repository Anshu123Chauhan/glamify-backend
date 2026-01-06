import express from "express";
import {
  createProduct,
  getProductsByCategory,
} from "../controllers/product.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createProduct);
router.get("/category/:categoryId", protect, getProductsByCategory);

export default router;
