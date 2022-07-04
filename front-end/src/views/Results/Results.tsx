import React from "react";
import "./Results.css";
import Product from "../../components/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import ProductType from "../../types/Product";
import useResults from "../../customHooks/useResults";
import useParams from "../../customHooks/useParams";
import { Helmet } from "react-helmet";

const Results = () => {
  const query = useParams();
  const { products } = useResults(query || "");

  return (
    <div className="results">
      <Helmet>
        <title>Búsqueda de {query} | Mercado Libre</title>
      </Helmet>
      <SearchBox />
      <Breadcrumb />
      <div className="results-area">
        {products.length &&
          products.map((product: ProductType) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Results;
