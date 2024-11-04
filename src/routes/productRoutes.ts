import { Router } from "express";
import {
  getAllProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController";

const routes = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: CRUD relacionado con productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
routes.get("/", getAllProducts); // Trae todos los productos
routes.get("/:id", getProductByID); // Trae un solo producto
routes.post("/", createProduct); // Crear un producto
routes.put("/:id", updateProduct); // Actualizar un producto
routes.delete("/:id", deleteProduct); // Borrar un producto

export default routes;