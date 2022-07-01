import React from "react";
import logo from "../../assets/shoesLogo.webp";
import stylingProps from "../../interfaces";

function Product({ className }: stylingProps) {
  return (
    <div className={className}>
      <div className="col-1">
        <img src={logo} alt="..." />
        <div>
          <div className="row-1">
            <h3>$ 70.000</h3>
            <span id="product-state" />
          </div>

          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </small>
        </div>
      </div>

      <small>Medellín, Colombia</small>
    </div>
  );
}

export default Product;
