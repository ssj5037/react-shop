import { BsTrash } from "react-icons/bs";
import { PiMinus, PiPlus } from "react-icons/pi";
import RSSvgButton from "./RSSvgButton";

export default function CartCard() {
  return (
    <li>
      <div className="flex justify-between gap-10">
        <div className="flex-1">
          <img className="" src="/image/1.webp" alt="물품1" />
        </div>
        <div className="flex-3 flex flex-col justify-center gap-3 text-xl">
          <p className="text-3xl">REBILLION 프린트 후드</p>
          <p>
            <span className="text-3xl text-blue-500 font-bold">M </span>
            size
          </p>
          <p>55,000</p>
        </div>
        <div className="flex-1 flex justify-between items-center text-xl">
          <RSSvgButton className="w-10 h-10">
            <PiMinus />
          </RSSvgButton>
          <span>0</span>
          <RSSvgButton className="w-10 h-10">
            <PiPlus />
          </RSSvgButton>
          <RSSvgButton className="w-10 h-10">
            <BsTrash />
          </RSSvgButton>
        </div>
      </div>
    </li>
  );
}
