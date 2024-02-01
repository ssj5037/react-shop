import { PiMinus, PiPlus } from "react-icons/pi";
import RSButton from "../components/RS/RSButton";
import RSSvgButton from "../components/RS/RSSvgButton";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/product";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Product() {
  const [count, setCount] = useState(0);
  const { user } = useAuth();
  const { id } = useParams();
  const { isLoading, data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 60 * 5,
  });

  const handleMinus = () =>
    setCount((count) => (count > 0 ? count - 1 : count));
  const handlePlus = () =>
    setCount((count) => (count < 10 ? count + 1 : count));
  const handleCart = () => {};

  if (isLoading) return <div>로딩중</div>;
  return (
    <article className="flex gap-10 px-3 flex-col lg:flex-row">
      <div className="flex-1">
        <img className="" src={product.image} alt={product.title} />
      </div>
      <div className="flex-1 flex flex-col gap-8 border-t pt-8">
        <p className="text-4xl font-semibold">{product.title}</p>
        <p className="text-3xl border-b pb-8">
          {Number(product.price).toLocaleString("ko-KR")}
        </p>
        <div className="flex justify-between gap-5 text-2xl">
          <label htmlFor="size" className="font-semibold">
            사이즈
          </label>
          <select
            name="size"
            id="size"
            className="w-4/5 p-1 outline-dashed outline-1 outline-blue-500"
          >
            <option disabled>사이즈를 선택하세요</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between items-center text-2xl">
          <label className="font-semibold">갯수</label>
          <div className="flex justify-between items-center w-4/5">
            <RSSvgButton onClick={handleMinus}>
              <PiMinus />
            </RSSvgButton>
            <span>{count}</span>
            <RSSvgButton onClick={handlePlus}>
              <PiPlus />
            </RSSvgButton>
          </div>
        </div>
        <RSButton
          className="py-3 text-2xl font-semibold"
          onClick={handleCart}
          disabled={!user}
        >
          장바구니에 추가
        </RSButton>
      </div>
    </article>
  );
}
