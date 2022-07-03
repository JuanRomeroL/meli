import { useEffect, useState } from "react";
import ProductType from "../types/Product";
const axios = require("axios").default;

export const useResults = (query: string) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/items?q=${query}`)
      .then((response: any) => {
        const { categories, items } = response.data;
        setProducts(items);
        setCategories(categories);
      })
      .catch((error: any) => {});
  }, []);

  return { products, categories };
};

export default useResults;
