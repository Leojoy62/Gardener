import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.patch("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
router.get("/category/:category", ProductControllers.getProductsByCategory);

export const ProductRoutes = router;
