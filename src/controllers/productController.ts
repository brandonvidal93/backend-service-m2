import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product);

// Obtener (GET) de todos los productos
export const getAllProducts = async(req: Request, res: Response) => {
  try {
    const products = await productRepository.find();
    res.json(products);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener los productos."});
  }
}

// Obtener (GET) un producto por ID
export const getProductByID = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id)
    });

    if(product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Producto no encontrado." })
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el producto."});
  }
}