import React, { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./views/SearchPage";
import Results from "./views/Results/Results";
import ProductDetail from "./views/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/items" element={<Results />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
