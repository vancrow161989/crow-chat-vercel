import { Outlet } from "react-router-dom";
import ProductNav from "./product-nav";

const ProductsLayout = () => {
  return (
    <>
      <p className="max-w-2xl px-4 py-2 mx-auto mt-4 text-sm text-center text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-lg">
        This app runs on free-tier hosting, so responses (page load, chat
        messages, or summaries) may take 30-60 seconds the first time. If it
        seems stuck, try refreshing. Thanks for your patience!
      </p>
      <ProductNav />
      <Outlet />
    </>
  );
};

export default ProductsLayout;
