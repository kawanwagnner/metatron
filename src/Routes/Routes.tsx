import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProdutsDetails";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorited" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/*" element={<>Página não encontrada</>} />
      </Routes>
    </BrowserRouter>
  );
}
