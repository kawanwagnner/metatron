import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/header/NavBar";
import { GrClose } from "react-icons/gr";

import "../components/Main/products/css/CartPage.css";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ProductContext);
  const { removeFromCart } = useContext(ProductContext);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  // Calculating the total price
  const totalPrice = cartItems.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  // Convertendo o separador decimal de ponto para vírgula
  const formattedTotalPrice = totalPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <Navbar />
      <div className="cart-title">
        <h1>Meu carrinho:</h1>
      </div>
      <div className="cart-page">
        {cartItems.map((product) => (
          <div className="card" key={product.id}>
            <div className="btn-remove-cart">
              <button onClick={() => handleRemoveFromCart(product.id)}>
                <GrClose />
              </button>
            </div>
            <div className="imgBx">
              <img
                onClick={() => navigate(`/details/${product.id}`)}
                src={product.image}
                alt="Algo deu errado. :-("
              />
            </div>
            <div className="contentBx">
              <h3>{product.name}</h3>
              <h2 className="price">R$ {product.price.toFixed(2)}</h2>
              <a href={`/details/${product.id}`} className="buy">
                Mais Detalhes
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total a pagar - R$ {formattedTotalPrice}</h3>
      </div>
    </>
  );
};

export default CartPage;
