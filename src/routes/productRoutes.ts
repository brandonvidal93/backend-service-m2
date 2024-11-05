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
 *   description: CRUD relacionado con Productos
 */

/**
 * @swagger
 * /api/products:
 *    get:
 *      summary: Obtener todos los productos
 *      tags: [Products]
 *      responses:
 *        200:
 *          description: Lista de productos
 */
routes.get("/", getAllProducts); // Trae todos los productos

/**
 * @swagger
 * /api/products/{id}:
 *    get:
 *      summary: Obtener un producto por ID
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: ID del producto
 *      responses:
 *        200:
 *          description: Detalles del producto
 *        404:
 *          description: Producto no encontrado
 */
routes.get("/:id", getProductByID); // Trae un solo producto

/**
 * @swagger
 * /api/products:
 *    post:
 *      summary: Crear un nuevo producto
 *      tags: [Products]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - description
 *                - price
 *              properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                price:
 *                  type: number
 *      responses:
 *        201:
 *          description: Producto creado
 *        500:
 *          description: Error en el servidor
 */
routes.post("/", createProduct); // Crear un producto
routes.put("/:id", updateProduct); // Actualizar un producto
routes.delete("/:id", deleteProduct); // Borrar un producto

export default routes;