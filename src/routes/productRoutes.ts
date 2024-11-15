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
 *                - imgUrl
 *              properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                price:
 *                  type: number
 *                imgUrl:
 *                  type: string
 *      responses:
 *        201:
 *          description: Producto creado
 *        500:
 *          description: Error en el servidor
 */
routes.post("/", createProduct); // Crear un producto

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imgUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
routes.put("/:id", updateProduct); // Actualizar un producto

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
routes.delete("/:id", deleteProduct); // Borrar un producto

export default routes;