import React from "react";
import "./Product.css";
import logo from "../../assets/shoesLogo.webp";

function Product() {
  return (
    <div className="product">
      <div className="col-1">
        <img src={logo} alt="..." height={100}></img>
        <div>
          <div>
            <small>$ 70.000</small>
            <small>.</small>
          </div>

          <small>Celular Motorola XS new model 2007 de segunda mano</small>
        </div>
      </div>

      <small>Medellín, Colombia</small>
    </div>
  );
}

export default Product;
