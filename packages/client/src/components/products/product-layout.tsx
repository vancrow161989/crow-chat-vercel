import { Outlet } from "react-router-dom";
import ProductNav from "./product-nav";

const ProductsLayout = () => {
  return (
    <>
      <ProductNav />
      <Outlet />
    </>
  );
};

export default ProductsLayout;
