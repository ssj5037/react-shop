import { FaReact } from "react-icons/fa";
import { BsCart2, BsPencilSquare } from "react-icons/bs";

export default function Header() {
    return (
        <header className="flex text-xl">
            <div>
                <FaReact />
                <div>React Shop</div>
            </div>
            <div>
                <BsCart2 />
                <BsPencilSquare  />
                <div>
                    로그인 사용자
                </div>
                <button>로그인</button>
            </div>
        </header>
    );
}

