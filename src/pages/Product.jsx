import { PiMinus, PiPlus } from "react-icons/pi";
import RSButton from "../components/RS/RSButton";
import RSSvgButton from "../components/RS/RSSvgButton";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useCarts from "../hooks/useCarts";
import useProducts from "../hooks/useProducts";

export default function Product() {
  const { user } = useAuth();
  const { id } = useParams();

  const {
    productQuery: { isLoading, data: product },
  } = useProducts(id);
  const {
    addCarts: { mutate },
  } = useCarts();

  const [comment, setComment] = useState("");
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");

  const handleMinus = () =>
    setCount((count) => (count > 1 ? count - 1 : count));
  const handlePlus = () =>
    setCount((count) => (count < 10 ? count + 1 : count));

  const handleCart = () => {
    if (size === "") {
      setComment("사이즈를 선택하세요.");
      setTimeout(() => {
        setComment("");
      }, 4 * 1000);
      return;
    }

    const resultComment = mutate({
      id: `${id}_${size}`,
      image: product.image,
      title: product.title,
      price: product.price,
      count,
      size,
    });

    setComment(resultComment);
    setTimeout(() => {
      setComment("");
    }, 4 * 1000);
  };

  if (isLoading) return <div>로딩중</div>;
  return (
    <article>
      <p className="mb-3 px-3 text-gray-500">{`> ${product.category}`}</p>
      <section className="flex gap-10 px-3 flex-col lg:flex-row">
        <img
          className="basis-7/12 w-96 mx-auto"
          src={product.image}
          alt={product.title}
        />
        <div className="basis-5/12 flex flex-col gap-8 border-t pt-8">
          <h2 className="text-4xl font-semibold">{product.title}</h2>
          <p className="text-lg">{product.desc}</p>
          <p className="text-3xl border-b pb-8">
            {Number(product.price).toLocaleString("ko-KR")}원
          </p>
          <div className="flex justify-between gap-5 text-2xl">
            <label htmlFor="size" className="font-semibold">
              사이즈
            </label>
            <select
              name="size"
              id="size"
              onChange={(e) => setSize(e.target.value)}
              value={size}
              required
              className="w-4/5 p-1 outline-dashed outline-1 outline-blue-500"
            >
              <option value="" disabled>
                사이즈를 선택하세요
              </option>
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
          <p>{comment}</p>
        </div>
      </section>
    </article>
  );
}
