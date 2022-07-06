import { useEffect, useState } from "react";
import ProductType from "../types/Product";
const axios = require("axios").default;

export const useResults = (query: string) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [status, setStatus] = useState<string>("init");

  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3001/api/items?q=${query}`)
      .then((response: any) => {
        const { categories, items } = response.data;
        setProducts(items);
        setCategories(categories);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [query]);

  return { products, categories, status };
};

export default useResults;
