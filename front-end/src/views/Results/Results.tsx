import React from "react";
import "./Results.css";
import Product from "../../components/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";

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
