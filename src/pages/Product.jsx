import RSButton from "../components/RSButton";

export default function Product() {
  return (
    <article className="flex gap-10">
      <div className="flex-1">
        <img className="" src="/image/1.webp" alt="물품1" />
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <p className="text-4xl font-semibold">REBILLION 프린트 후드</p>
        <p className="text-3xl">55,000</p>
        <p className="flex gap-5">
          <label htmlFor="size" className="font-semibold">
            사이즈
          </label>
          <select name="size" id="size">
            <option disabled>사이즈를 선택하세요</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </p>
        <p className="flex justify-between items-center text-2xl">
          <button className=" rounded-full p-1 hover:bg-blue-50 w-16 h-16">
            ─
          </button>
          <span>0</span>
          <button className=" rounded-full p-1 hover:bg-blue-50 w-16 h-16">
            ┼
          </button>
        </p>
        <RSButton className="py-3 text-2xl font-semibold">
          장바구니에 추가
        </RSButton>
      </div>
    </article>
  );
}
