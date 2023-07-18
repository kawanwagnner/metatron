import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/Main/products/ProdutsDetails";
import Home from "../pages/Home";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/*" element={<>Página não encontrada</>} />
      </Routes>
    </BrowserRouter>
  );
}
