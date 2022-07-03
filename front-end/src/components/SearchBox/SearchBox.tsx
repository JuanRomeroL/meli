import React from "react";
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/searchLogo.png";
import StylingProps from "../../types/StylingProps";

function SearchBox({ className }: StylingProps) {
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
