import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <li className="p-3 shadow-lg ">
      <Link to="/products/1">
        <div className="rounded-xl overflow-hidden transition-all">
          <img
            className="hover:scale-105 duration-100"
            src="/image/1.webp"
            alt="물품1"
          />
        </div>
        <p>상의</p>
        <p className="flex flex-row justify-between">
          <span>REBILLION 프린트 후드</span>
          <span>55,000</span>
        </p>
      </Link>
    </li>
  );
}
