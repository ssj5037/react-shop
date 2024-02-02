import { PiEquals, PiPlus } from "react-icons/pi";
import CartCard from "../components/cart/CartCard";
import RSButton from "../components/RS/RSButton";
import PriceCard from "../components/cart/PriceCard";
import useCarts from "../hooks/useCarts";

const SHIPPING = 3000;
export default function Cart() {
  const {
    cartsQuery: { isLoading, data },
  } = useCarts();

  if (isLoading) return <div>로딩중</div>;
  return (
    <div className="flex flex-col">
      <div className="text-center pb-10 border-b text-4xl mb-10 font-semibold text-blue-500">
        내 장바구니
      </div>
      <ul className="flex flex-col gap-5 pb-10 px-5 border-b">
        {data.carts.length === 0 && <li>장바구니에 상품이 없습니다.</li>}
        {data.carts.map((cart) => (
          <CartCard key={cart.id} cart={cart} />
        ))}
      </ul>

      <div className="flex justify-around items-center text-xl py-14">
        <PriceCard text="상품 총액" price={data.totalPrice} />
        <PiPlus />
        <PriceCard text="배송비" price={SHIPPING} />
        <PiEquals />
        <PriceCard text="총 가격" price={data.totalPrice + SHIPPING} />
      </div>
      <RSButton className="py-5 mx-5 text-4xl">주문하기</RSButton>
    </div>
  );
}
