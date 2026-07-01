import { useParams } from "react-router-dom";
import ReviewList from "../components/reviews/review-list";

const ProductDetails = () => {
  const { productId } = useParams();

  return <ReviewList key={productId} productId={Number(productId)} />;
};

export default ProductDetails;
