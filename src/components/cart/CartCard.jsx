import { BsTrash } from "react-icons/bs";
import { PiMinus, PiPlus } from "react-icons/pi";
import RSSvgButton from "../RS/RSSvgButton";
import useCarts from "../../hooks/useCarts";

export default function CartCard({ cart }) {
  const { count, image, price, size, title, id } = cart;
  const { updateCarts, deleteCarts } = useCarts();

  const handleDelete = () => deleteCarts.mutate(id);
  const handleMinus = () => {
    const newCart = { ...cart, count: count - 1 };
    updateCarts.mutate(newCart);
  };
  const handlePlus = () => {
    const newCart = { ...cart, count: count + 1 };
    updateCarts.mutate(newCart);
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
        <RSSvgButton
          disabled={count <= 1}
          onClick={handleMinus}
          className="w-9 h-9"
        >
          <PiMinus />
        </RSSvgButton>
        <span>{count}</span>
        <RSSvgButton
          disabled={count >= 10}
          onClick={handlePlus}
          className="w-9 h-9"
        >
          <PiPlus />
        </RSSvgButton>
        <RSSvgButton onClick={handleDelete} className="w-9 h-9">
          <BsTrash />
        </RSSvgButton>
      </div>
    </li>
  );
}
