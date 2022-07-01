import React, { useEffect } from "react";
import "./Results.css";
import Product from "../../components/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import { default as axios } from "axios";

function Results() {
  useEffect(() => {
    axios
      .get(`localhost:3000/api/items?q=Bolso`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
