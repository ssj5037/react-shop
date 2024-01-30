import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <li className="mb-10">
      <Link to="/product/1">
        <div className="overflow-hidden transition-all">
          <img
            className="hover:scale-105 duration-100"
            src="/image/1.webp"
            alt="물품1"
          />
        </div>
        <div className="pt-3">
          <p className="text-sm text-gray-400">상의</p>
          <p className="">REBILLION 프린트 후드</p>
          <p className="font-semibold pt-2">55,000</p>
        </div>
      </Link>
    </li>
  );
}
