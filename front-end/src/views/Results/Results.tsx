import React from "react";
import "./Results.css";
import Product from "../../components/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import ProductType from "../../types/Product";
import useResults from "../../customHooks/useResults";
import useParams from "../../customHooks/useParams";

const Results = () => {
  const { products } = useResults(useParams() || "");

  return (
    <div className="results">
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
