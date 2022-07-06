import React from "react";
import "./Results.css";
import Product from "../../components/Product";
import ProductType from "../../types/Product";
import useResults from "../../hooks/useResults";
import useParams from "../../hooks/useParams";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const searchQuery = useParams(useLocation().search);
  const { products, categories, status } = useResults(searchQuery);
  const title = `Resultados de ${searchQuery}`;
  const navigate = useNavigate();

  const showProductDetail = (id: string) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="results">
      <Header title={title} keywords={categories} status={status} />
      <div className="main">
        {status === "success" &&
          products.map((product: ProductType) => (
            <Product
              key={product.id}
              {...product}
              showDetail={showProductDetail}
            />
          ))}

        {status === "loading" && (
          <MessageBox
            message={`Buscando tus productos con nombre ${searchQuery} ...`}
          />
        )}
        {status === "error" && (
          <MessageBox
            message={"Opps! Hubo un error al buscar tus productos."}
          />
        )}
      </div>
    </div>
  );
};

export default Results;
