import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";
import useProducts from "../../hooks/useProducts";

export default function ProductList() {
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  if (isLoading)
    return (
      <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </ul>
    );

  return (
    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
