import { BsTrash } from "react-icons/bs";
import { PiMinus, PiPlus } from "react-icons/pi";
import RSSvgButton from "../RS/RSSvgButton";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";

export default function CartCard({ cart }) {
  const { count, image, price, size, title, id } = cart;
  const {
    user: { uid },
  } = useAuth();
  const { updateCart, deleteCart, refetch } = useCart();

  const handleDelete = () => deleteCart(uid, id, refetch);
  const handleMinus = () => {
    if (count > 1) {
      const newCart = { ...cart, count: count - 1 };
      updateCart(uid, newCart, refetch);
    }
  };
  const handlePlus = () => {
    if (count < 10) {
      const newCart = { ...cart, count: count + 1 };
      updateCart(uid, newCart, refetch);
    }
  };
  return (
    <li className="flex justify-between gap-10">
      <div className="flex-1">
        <img src={image} alt={title} />
      </div>
      <div className="flex-1 sm:flex-2 md:flex-3 flex flex-col justify-center gap-3 text-xl">
        <p className="text-2xl line-clamp-2">{title}</p>
        <p>
          <span className="text-2xl text-blue-500 font-bold">{size} </span>
          size
        </p>
        <p>{Number(price).toLocaleString("ko-KR")}원</p>
      </div>
      <div className="flex-1 flex justify-between items-center text-xl">
        <RSSvgButton onClick={handleMinus} className="w-9 h-9">
          <PiMinus />
        </RSSvgButton>
        <span>{count}</span>
        <RSSvgButton onClick={handlePlus} className="w-9 h-9">
          <PiPlus />
        </RSSvgButton>
        <RSSvgButton onClick={handleDelete} className="w-9 h-9">
          <BsTrash />
        </RSSvgButton>
      </div>
    </li>
  );
}
