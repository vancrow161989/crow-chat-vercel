import ReviewList from "../components/reviews/review-list";

const ReviewSummarizer = () => {
  // productId hardcoded for now — swap for a route param (e.g. /reviews/:productId)
  // once you're summarizing reviews for more than one product.
  return <ReviewList productId={1} />;
};

export default ReviewSummarizer;
