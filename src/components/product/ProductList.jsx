import ProductCard from "./ProductCard";
import { getProducts } from "../../api/product";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "./SkeletonCard";

export default function ProductList() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5,
  });

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
