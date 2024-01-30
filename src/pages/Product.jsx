import { PiMinus, PiPlus } from "react-icons/pi";
import RSButton from "../components/RSButton";
import RSSvgButton from "../components/RSSvgButton";

export default function Product() {
  return (
    <article className="flex gap-10 px-3 flex-col md:flex-row">
      <div className="flex-1">
        <img className="" src="/image/1.webp" alt="물품1" />
      </div>
      <div className="flex-1 flex flex-col gap-8 border-t pt-8">
        <p className="text-4xl font-semibold">REBILLION 프린트 후드</p>
        <p className="text-3xl border-b pb-8">55,000</p>
        <p className="flex justify-between gap-5 text-2xl">
          <label htmlFor="size" className="font-semibold">
            사이즈
          </label>
          <select
            name="size"
            id="size"
            className="w-4/5 p-1 outline-dashed outline-1 outline-blue-500"
          >
            <option disabled>사이즈를 선택하세요</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </p>
        <p className="flex justify-between items-center text-2xl">
          <label className="font-semibold">갯수</label>
          <div className="flex justify-between items-center w-4/5">
            <RSSvgButton>
              <PiMinus />
            </RSSvgButton>
            <span>0</span>
            <RSSvgButton>
              <PiPlus />
            </RSSvgButton>
          </div>
        </p>
        <RSButton className="py-3 text-2xl font-semibold">
          장바구니에 추가
        </RSButton>
      </div>
    </article>
  );
}
