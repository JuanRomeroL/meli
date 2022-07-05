import React from "react";
import { render } from "@testing-library/react";
import Product from "../components/Product";
import ProductType from "../types/Product";

describe("<Product /> component", () => {
  const product: ProductType = {
    id: "4456565",
    title: "Producto de prueba",
    price: { currency: "ARG", amount: 47, decimals: 33 },
    picture: "Avatar del producto",
    condition: "new",
    free_shipping: true,
  };

  const productV2: ProductType = {
    id: "4456565",
    title: "Producto de prueba",
    price: { currency: "ARG", amount: 47, decimals: 33 },
    picture: "Avatar del producto",
    condition: "new",
    free_shipping: false,
  };

  const emptyFuction = () => {};

  test("Component should be rendered correctly with free shipping", () => {
    const { container } = render(
      <Product {...product} showDetail={emptyFuction} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Component should be rendered correctly with no free shipping", () => {
    const { container } = render(
      <Product {...productV2} showDetail={emptyFuction} />
    );
    expect(container).toMatchSnapshot();
  });
});
