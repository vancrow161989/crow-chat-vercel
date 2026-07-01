import type { Request, Response } from "express";
import { productRepository } from "../repositories/product.repository";

export const productsController = {
  async getProducts(_req: Request, res: Response) {
    const products = await productRepository.getAll();

    if (products.length === 0) {
      res.json([]);
      return;
    }
    res.json(products);
  },
};
