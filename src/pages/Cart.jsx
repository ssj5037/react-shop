import { PiEquals, PiPlus } from "react-icons/pi";
import CartCard from "../components/cart/CartCard";
import RSButton from "../components/RS/RSButton";

export default function Cart() {
  return (
    <div>
      <div className="text-center pb-10 border-b text-4xl mb-10 font-semibold text-blue-500">
        내 장바구니
      </div>

      <ul className="flex flex-col gap-5 pb-10 border-b">
        <CartCard />
        <CartCard />
        <CartCard />
      </ul>

      <div className="flex justify-around items-center text-xl py-14">
        <div className="flex flex-col justify-center items-center p-10 bg-gray-50 rounded-2xl">
          <span>상품 총액</span>
          <span className="text-3xl font-bold text-blue-500">55,000</span>
        </div>
        <p>
          <PiPlus />
        </p>
        <div className="flex flex-col justify-center items-center p-10 bg-gray-50 rounded-2xl">
          <span>배송비</span>
          <span className="text-3xl font-bold text-blue-500">3,000</span>
        </div>
        <p>
          <PiEquals />
        </p>
        <div className="flex flex-col justify-center items-center p-10 bg-gray-50 rounded-2xl">
          <span>총가격</span>
          <span className="text-3xl font-bold text-blue-500">58,000</span>
        </div>
      </div>
      <RSButton className="w-full py-5 text-4xl ">주문하기</RSButton>
    </div>
  );
}
