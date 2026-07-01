// Add this type + method to your existing review-api.ts

import axios from "axios";

export type Product = {
  id: number;
  name: string;
  reviewCount: number;
  averageRating: number;
};
export const productApi = {
  async fetchProducts() {
    const { data } = await axios.get<Product[]>("/api/products");
    return data;
  },
};
