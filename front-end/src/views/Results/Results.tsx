import React from "react";
import "./Results.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";

function Results() {
  return (
    <div className="results">
      <SearchBox />
      <Breadcrumb />
      <div className="results-area">
        {[1, 2, 3, 4].map((item) => (
          <Product key={item} />
        ))}
      </div>
    </div>
  );
}

export default Results;
