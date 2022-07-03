import { useEffect, useState } from "react";
import ProductDetailTemplate from "../templates/ProductDetail";
import ProductDetail from "../types/ProductDetail";
const axios = require("axios").default;

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductDetail>(ProductDetailTemplate);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/items/${id}`)
      .then((response: any) => {
        const { item } = response.data;
        setProduct(item);
      })
      .catch((error: any) => {});
  }, []);

  return product;
};

export default useProduct;
