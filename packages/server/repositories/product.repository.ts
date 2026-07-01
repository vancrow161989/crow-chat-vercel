import { prisma } from "../prisma/prisma";

export const productRepository = {
  getProduct(productId: number) {
    return prisma.product.findUnique({
      where: { id: productId },
    });
  },
  getAll() {
    return prisma.product.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: { select: { reviews: true } },
      },
    });
  },
};
