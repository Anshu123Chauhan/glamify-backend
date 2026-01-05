import express from "express";
import {
  createProduct,
  getProductsByCategory,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/category/:categoryId", getProductsByCategory);

export default router;
