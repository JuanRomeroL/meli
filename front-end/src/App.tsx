import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./views/Results/Results";
import SearchPage from "./views/SearchPage";
import ProductDetail from "./views/ProductDetail";

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
