import ProductList from "../components/product/ProductList";

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
        <ProductList />
      </section>
    </>
  );
}
