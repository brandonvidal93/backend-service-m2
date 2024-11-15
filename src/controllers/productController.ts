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
};

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
};

// Crear (POST) un producto
export const createProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body; // Sacando los datos del Request
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.imgUrl = imgUrl;
    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({
      message: "Error al crear el producto."
    });
  }
};

// Actualizar (PUT) un producto
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body;

    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id)
    });

    if (product) {
      product.name = name ?? product.name;
      product.description = description ?? product.description;
      product.price = price ?? product.price;
      product.imgUrl = imgUrl ?? product.imgUrl;
      await productRepository.save(product);
      res.json(product);
    } else {
      res.status(404).json({
        message: "Producto no encontrado."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al actualizar el producto."
    });
  }
};

// Borrar (DELETE) un producto
export const deleteProduct = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id)
    });

    if (product) {
      await productRepository.remove(product);
      res.json({
        message: "Producto eliminado."
      });
    } else {
      res.status(404).json({
        message: "Producto no encontrado."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al borrar el producto."
    });
  }
};