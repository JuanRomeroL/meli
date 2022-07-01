import React from "react";
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/searchLogo.png";
import stylingProps from "../../interfaces";

function SearchBox({ className }: stylingProps) {
  return (
    <div className={className}>
      <img src={logo} alt="..." />
      <form>
        <input placeholder="Nunca dejes de buscar"></input>
        <button>
          <img src={searchLogo} alt="..." />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
