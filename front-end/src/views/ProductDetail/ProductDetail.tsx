import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import useProduct from "../../customHooks/useProduct";
import StylingProps from "../../types/StylingProps";

function ProductDetail({ className }: StylingProps) {
  const { id = "" } = useParams();
  const { picture, condition, sold_quantity, title, price, description } =
    useProduct(id);

  return (
    <div className={className}>
      <SearchBox />
      <Breadcrumb />
      <div className="main">
        <div className="row-1">
          <div id="imagen">
            <img src={picture} alt="..." />
          </div>
          <div id="attributes">
            <small>
              {condition} - {sold_quantity} vendidos
            </small>
            <h3>{title}</h3>
            <h1>
              {price.amount}
              <small>75</small>
            </h1>
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <h2>Descripción del producto</h2>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
