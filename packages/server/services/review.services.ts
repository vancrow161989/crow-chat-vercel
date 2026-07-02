import fs from "fs";
import path from "path";
import { openRouterClient } from "../providers/openrouter/openrouter.client";
import { reviewRepository } from "../repositories/review.repository";

const template = fs.readFileSync(
  path.join(__dirname, "..", "prompts", "summary-review.txt"),
  "utf-8"
);

export const reviewService = {
  async summarizeReviews(productId: number) {
    const existingSummary = await reviewRepository.getReviewSummary(productId);
    if (existingSummary) {
      return existingSummary;
    }

    const last10Reviews = await reviewRepository.getReviews(productId, 10);

    const joinReviews = last10Reviews
      .map((review) => review.content)
      .join("\n\n");

    const instructions = template.replace("{{reviews}}", joinReviews);

    const messages = [
      {
        role: "user",
        content: instructions,
      },
    ];

    const result = await openRouterClient.generateText({ messages });

    if (result.response === "Failed") {
      const error = new Error(result.message) as Error & { status?: number };
      error.status = 402;
      throw error;
    }

    await reviewRepository.storeReviewSummary(productId, result.message);

    return result.message;
  },
};
