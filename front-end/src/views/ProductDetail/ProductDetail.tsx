import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import StylingProps from "../../types/StylingProps";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";

function ProductDetail({ className }: StylingProps) {
  const { id = "" } = useParams();
  const { product, status } = useProduct(id);
  const { title, picture, condition, sold_quantity, price, description } =
    product;

  return (
    <div className={className}>
      <Header
        title={title}
        description={description}
        keywords={[condition, title]}
        status={status}
      />

      <div className="main">
        {status === "success" && (
          <>
            <div className="row-1">
              <div className="image">
                <img src={picture} alt="..." />
              </div>
              <div className="attributes">
                <small>
                  {condition} - {sold_quantity} vendidos
                </small>
                <h3>{title}</h3>
                <h1>
                  $ {Intl.NumberFormat("es-AR").format(price.amount)}
                  <small>{price.decimals}</small>
                </h1>
                <button>Comprar</button>
              </div>
            </div>
            <div>
              <h2>Descripción del producto</h2>
              <small>{description}</small>
            </div>
          </>
        )}

        {status === "loading" && (
          <MessageBox message={`Cargando el producto ${id} ...`} />
        )}
        {status === "error" && (
          <MessageBox
            message={`Opps! Hubo un error cargando el producto ${id}.`}
          />
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
