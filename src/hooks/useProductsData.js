import { useEffect } from "react";
import { useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getDate = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        if (!res.ok) setError("failed to get products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.info("fetch aborted");
        } else {
          setError("failed to fetch products data");
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };
    getDate();

    return () => {
      controller.abort();
    };
  }, []);
  return { products, loading, error };
};
