import React from "react";
import "./SearchBox.css";
import logo from "../../assets/logo.png";

function SearchBox() {
  return (
    <div className="search-box">
      <img src={logo} height={39}></img>
      <form>
        <input placeholder="Nunca dejes de buscar"></input>
        <button>
          <img src={logo} height={20}></img>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
