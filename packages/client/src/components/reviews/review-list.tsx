import { useMutation, useQuery } from "@tanstack/react-query";
import { HiSparkles } from "react-icons/hi2";
import { Button } from "../ui/button";
import {
  reviewApi,
  type GetReviewResponse,
  type SummarizeResponse,
} from "./review-api";
import ReviewSkeleton from "./review-skeleton";
import StarRating from "./star-rating";

type Props = {
  productId: number;
};

const ReviewList = ({ productId }: Props) => {
  const summaryMutation = useMutation<SummarizeResponse>({
    mutationFn: () => reviewApi.summarizeReviews(productId),
  });
  const reviewsQuery = useQuery<GetReviewResponse>({
    queryKey: ["reviews", productId],
    queryFn: () => reviewApi.fetchReviews(productId),
  });

  if (reviewsQuery.isLoading) {
    return (
      <div className="flex flex-col gap-5 pt-6 max-w-5xl mx-auto pb-6">
        {[1, 2, 3].map((i) => (
          <ReviewSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (reviewsQuery.error) {
    return (
      <p className="text-red-500">Could not fetch reviews. Please try again!</p>
    );
  }

  if (!reviewsQuery.data?.reviews.length) {
    return null;
  }

  const currentSummary =
    reviewsQuery.data?.summary || summaryMutation.data?.summary;

  return (
    <div className="pt-6 max-w-5xl mx-auto pb-6">
      <div className="mb-5">
        {currentSummary ? (
          <>
            <h2 className="font-bold pb-2">Summary:</h2>
            <p>{currentSummary}</p>
          </>
        ) : (
          <>
            <Button
              onClick={() => summaryMutation.mutate()}
              disabled={summaryMutation.isPending}
            >
              <HiSparkles /> Summarize
            </Button>
            {summaryMutation.isPending && (
              <div className="py-3">
                <ReviewSkeleton />
              </div>
            )}
            {summaryMutation.error && (
              <p>"Could not summarize reviews. Try again!"</p>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {reviewsQuery.data?.reviews.map((review) => (
          <div key={review.id}>
            <p className="font-semibold">{review.author}</p>
            <StarRating value={review.rating} />
            <p className="py-2">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
