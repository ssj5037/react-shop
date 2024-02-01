import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, image, title, category, price } = product;
  return (
    <li className="mb-10">
      <Link to={`/product/${id}`}>
        <div className="overflow-hidden transition-all">
          <img
            className="hover:scale-105 duration-100"
            src={image}
            alt={title}
          />
        </div>
        <div className="pt-3">
          <p className="text-sm text-gray-400">{category}</p>
          <p className="line-clamp-1">{title}</p>
          <p className="font-semibold pt-2">
            {Number(price).toLocaleString("ko-KR")}
          </p>
        </div>
      </Link>
    </li>
  );
}
