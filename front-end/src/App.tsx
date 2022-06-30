import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./views/Results/Results";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import SearchPage from "./views/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/items" element={<Results />}></Route>
        <Route path="/items/:id" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
