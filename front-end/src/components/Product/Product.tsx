import React from "react";
import ProductType from "../../types/Product";
import StylingProps from "../../types/StylingProps";
import { useNavigate } from "react-router-dom";

function Product({
  className,
  id,
  title,
  price,
  picture,
  free_shipping,
  condition,
}: StylingProps & ProductType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="col-1">
        <img src={picture} alt="..." />
        <div>
          <div className="row-1">
            <h3>{price.amount}</h3>
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
