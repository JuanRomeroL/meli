import React, { useState } from "react";
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/searchLogo.png";
import StylingProps from "../../types/StylingProps";
import { useNavigate } from "react-router-dom";

function SearchBox({ className }: StylingProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/items?q=${inputValue}`);
  };

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={className}>
      <img src={logo} alt="..." />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nunca dejes de buscar"
          onChange={handleInput}
          value={inputValue}
        />
        <button>
          <img src={searchLogo} alt="..." />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
