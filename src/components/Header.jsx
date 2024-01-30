import { FaReact } from "react-icons/fa";
import { BsCart2, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import RSButton from "./RSButton";

export default function Header() {
  return (
    <header className="p-5 pb-6 border-b mb-10 shadow-sm">
      <div className="flex justify-between items-center max-w-screen-xl m-auto">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-2xl font-semibold text-blue-400"
        >
          <FaReact />
          <div>React Shop</div>
        </Link>
        <div className="flex items-center justify-center gap-5">
          <Link to="/cart">
            <BsCart2 className="text-2xl text-blue-400" />
          </Link>
          <Link to="/new">
            <BsPencilSquare className="text-xl text-blue-400" />
          </Link>
          <p className="">
            <b>신수진</b>님 안녕하세요
          </p>
          <RSButton className="py-1">로그인</RSButton>
        </div>
      </div>
    </header>
  );
}
