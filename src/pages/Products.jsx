import { useParams } from "react-router-dom";
import ProductList from "../components/product/ProductList";

export default function Products() {
  const { type } = useParams();
  return (
    <>
      <h2 className="uppercase pb-10 border-b text-center text-4xl mb-10 font-semibold tracking-widest text-blue-500">
        전체상품
      </h2>
      <section className="flex justify-center items-center py-5 px-5 xl:px-0">
        <ProductList type={type} />
      </section>
    </>
  );
}
