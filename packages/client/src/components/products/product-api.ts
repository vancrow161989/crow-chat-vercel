import { apiClient } from "@/lib/api-client";

export type Product = {
  id: number;
  name: string;
  reviewCount: number;
  averageRating: number;
};
export const productApi = {
  async fetchProducts() {
    const { data } = await apiClient.get<Product[]>("/api/products");
    return data;
  },
};
