import ProductDetail from "../types/ProductDetail";

const ProductDetailTemplate: ProductDetail = {
  id: "string",
  title: "string",
  price: { currency: "string", amount: 1, decimals: "1" },
  picture: "string",
  condition: "string",
  free_shipping: false,
  sold_quantity: 1,
  description: "string",
};

export default ProductDetailTemplate;
