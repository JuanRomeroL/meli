import React, { useEffect } from "react";
import ProductType from "../../types/Product";
import StylingProps from "../../types/StylingProps";

interface FunctionProps {
  showDetail: Function;
}

function Product({
  className,
  id,
  title,
  price,
  picture,
  free_shipping,
  condition,
  showDetail,
}: StylingProps & ProductType & FunctionProps) {
  const handleClick = () => {
    showDetail(id);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="col-1">
        <div className="image">
          <img src={picture} alt="..." />
        </div>
        <div>
          <div className="row-1">
            <h2>$ {Intl.NumberFormat("es-AR").format(price.amount)}</h2>
            {free_shipping && <span id="free-shipping-enabled" />}
          </div>

          <small>{title}</small>
        </div>
      </div>

      <small>{condition}</small>
    </div>
  );
}

export default Product;
