import { useEffect, useState } from "react";
import ProductDetailTemplate from "../templates/ProductDetail";
import ProductDetail from "../types/ProductDetail";
const axios = require("axios").default;

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductDetail>(ProductDetailTemplate);
  const [status, setStatus] = useState<string>("init");

  useEffect(() => {
    setStatus("loading");
    axios
      .get(`http://localhost:3001/api/items/${id}`)
      .then((response: any) => {
        const { item } = response.data;
        setProduct(item);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return { product, status };
};

export default useProduct;
