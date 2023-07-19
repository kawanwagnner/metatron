import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProdutsDetails";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import { ProductProvider } from "../Context/ProductContext";

export function Routers() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/*" element={<>Página não encontrada</>} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}
