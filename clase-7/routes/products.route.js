import express from "express"
import { createProduct, getProductsView } from "../controllers/products.controllers.js"

const router = express.Router()

router.get("/", getProductsView)
router.post("/", createProduct)

export default router