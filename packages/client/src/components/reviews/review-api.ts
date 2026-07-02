import { apiClient } from "@/lib/api-client";

type Review = {
  id: number;
  author: string;
  rating: number;
  content: string;
  createdAt: string;
};

export type GetReviewResponse = {
  summary: string;
  reviews: Review[];
};

export type SummarizeResponse = {
  summary: string;
};

export const reviewApi = {
  async fetchReviews(productId: number) {
    const { data } = await apiClient.get<GetReviewResponse>(
      `/api/products/${productId}/reviews`
    );
    return data;
  },

  async summarizeReviews(productId: number) {
    const { data } = await apiClient.post<SummarizeResponse>(
      `/api/products/${productId}/reviews/summarize`
    );

    return data;
  },
};
