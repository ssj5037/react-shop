export default function PriceCard({ text, price }) {
  return (
    <div
      className="flex flex-col justify-center items-center 
     bg-gray-50 rounded-2xl p-5 py-10 md:p-10"
    >
      <span>{text}</span>
      <span className="text-2xl font-bold text-blue-500">
        {price.toLocaleString("ko-KR")}원
      </span>
    </div>
  );
}
