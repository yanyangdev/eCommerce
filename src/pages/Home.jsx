import { useState } from "react";
import { ProductCard } from "../components";
import { useProductsData } from "../hooks/useProductsData";

const Home = () => {
  const { products, loading, error } = useProductsData();
  const [filter, setFilter] = useState("all");

  const setFilterInView = (filter) => {
    setFilter(filter);
  };
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((prod) => prod.category === filter);

  return (
    <div className="py-5 space-y-4 ">
      <div className="flex flex-nowrap gap-4 ">
        <button
          className={`btn btn-outline btn-active ${
            filter === "all" ? "border-solid border-4 border-primary" : ""
          }`}
          onClick={() => setFilterInView("all")}
        >
          all
        </button>
        <button
          className={`btn btn-outline btn-active ${
            filter === "electronics"
              ? "border-solid border-4 border-primary"
              : ""
          }`}
          onClick={() => setFilterInView("electronics")}
        >
          electronics
        </button>
        <button
          className={`btn btn-outline btn-active ${
            filter === "jewelery" ? "border-solid border-4 border-primary" : ""
          }`}
          onClick={() => setFilterInView("jewelery")}
        >
          jewelery
        </button>
        <button
          className={`btn btn-outline btn-active ${
            filter === "men's clothing"
              ? "border-solid border-4 border-primary"
              : ""
          }`}
          onClick={() => setFilterInView("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className={`btn btn-outline btn-active ${
            filter === "women's clothing"
              ? "border-solid border-4 border-primary"
              : ""
          }`}
          onClick={() => setFilterInView("women's clothing")}
        >
          women's clothing
        </button>
      </div>
      {loading && <div>Loading</div>}
      {!loading && !error && (
        <div className="grid grid-cols-4 gap-5">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
