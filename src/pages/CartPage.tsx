import React from "react";
import Navbar from "../components/header/NavBar";

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>Cart Page:</h1>
        <p>O carrinho está vazio.</p>
      </div>
    </>
  );
};

export default CartPage;
