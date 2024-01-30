import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-main-banner bg-cover h-96 flex flex-col justify-center items-center text-white leading-normal text-center font-serif">
          <p className="text-7xl">Shop With Us</p>
          <p className="text-2xl font-thin">
            We make every moment together even more special.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center py-5">
        <ul className="grid grid-cols-4 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </section>
    </>
  );
}
