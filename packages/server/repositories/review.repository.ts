import dayjs from "dayjs";
import type { Review } from "../generated/prisma/client";
import { prisma } from "../prisma/prisma";

export const reviewRepository = {
  getReviews(productId: number, limit?: number): Promise<Review[]> {
    // SELECT * FROM reviews WHERE productId = @productId ORDER BY createdAt DESC
    return prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  },

  async getReviewSummary(productId: number): Promise<string | null> {
    const summary = await prisma.summary.findFirst({
      where: {
        AND: [{ productId }, { expireAt: { gt: new Date() } }], // where expireAt > currentDate
      },
    });

    return summary ? summary.content : null;
  },

  storeReviewSummary(productId: number, summary: string) {
    const now = new Date();
    const expiresAt = dayjs().add(7, "days").toDate();

    const data = {
      content: summary,
      expireAt: expiresAt,
      generatedAt: now,
      productId,
    };

    return prisma.summary.upsert({
      where: { productId },
      create: data,
      update: data,
    });
  },
};
