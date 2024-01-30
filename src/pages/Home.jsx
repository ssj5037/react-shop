import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="mb-10">
        <div className="bg-main-banner bg-cover h-96 flex flex-col justify-center items-center text-white leading-normal text-center font-serif">
          <p className="text-7xl">Shop With Us</p>
          <p className="text-2xl font-thin">
            We make every moment together even more special.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center py-5 px-5 xl:px-0">
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
