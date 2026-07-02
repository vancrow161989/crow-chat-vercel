import { productApi } from "@/components/products/product-api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const ProductNav = () => {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: productApi.fetchProducts,
  });

  if (productsQuery.isLoading) return <p className="p-6">Loading products…</p>;
  if (productsQuery.isError)
    return <p className="p-6 text-red-500">Couldn't load products.</p>;

  return (
    <div className="max-w-7xl px-6 mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-bold text-center ">Products</h1>
      <p className="py-8 text-center text-gray-500">
        Select a product below to view its reviews.
      </p>
      {productsQuery.data && productsQuery.data?.length > 0 ? (
        <div className="border-b lg:flex md:text-center gap-4 ">
          {productsQuery.data?.map((product) => (
            <div key={product.id} className="py-2 flex-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500  line-clamp-1"
                    : "hover:text-green-500 line-clamp-1"
                }
                to={`/products/${product.id}`}
              >
                {product.name}
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        <p>No product entries.</p>
      )}
    </div>
  );
};

export default ProductNav;
