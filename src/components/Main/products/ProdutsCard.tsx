import React, { useState, useContext, useEffect } from "react";
import { BsBagHeart, BsBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../Context/ProductContext";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

import "./css/Products.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(ProductContext);
  const [icon, setIcon] = useState<JSX.Element>(<BsBagHeart size={25} />);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems: Product[] = JSON.parse(savedCartItems);
      if (parsedCartItems.some((item) => item.id === product.id)) {
        setIcon(<BsBagCheckFill size={25} />);
      }
    }
  }, [product.id]);

  const saveInCart = () => {
    if (icon.type === BsBagHeart) {
      addToCart(product);
      setIcon(<BsBagCheckFill size={25} />);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3500);

      const savedCartItems = localStorage.getItem("cartItems");
      let cartItems: Product[] = [];
      if (savedCartItems) {
        cartItems = JSON.parse(savedCartItems);
      }
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const removeInCart = () => {
    setIcon(<BsBagHeart size={25} />);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <Alert severity="success">
            <AlertTitle>Sucesso</AlertTitle>
            Adicionado com sucesso —{" "}
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cartpage")}
            >
              Verifique aqui!
            </strong>
          </Alert>
        </div>
      )}
      <div className="card">
        <div className="btn-add-cart">
          <button onClick={saveInCart} onClickCapture={removeInCart}>
            {icon}
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
            Compre Agora
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
