export default function SkeletonCard() {
  return (
    <li className="animate-skeleton mb-10 w-full h-full duration-100 flex-1">
      <div className="">
        <img className="bg-gray-200 w-96 h-72" />
      </div>
      <div className="pt-3 flex flex-col gap-2">
        <p className="bg-gray-200 h-5 w-full"></p>
        <p className="bg-gray-200 h-7 w-full"></p>
        <p className="bg-gray-200 h-7 mt-2 w-full"></p>
      </div>
    </li>
  );
}
