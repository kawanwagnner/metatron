import React, { useState } from "react";
import { BsBagHeart, BsBagCheckFill } from "react-icons/bs";

import "./css/Products.css";
import { useNavigate } from "react-router-dom";

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

  const [Icon, setIcon] = useState(<BsBagHeart size={25} />);
  const saveInCart = () => {
    setIcon(<BsBagCheckFill size={25} />);
  };

  const removeInCart = () => {
    setIcon(<BsBagHeart size={25} />);
  };

  return (
    <div className="card">
      <div className="btn-add-cart">
        <button onClick={saveInCart} onClickCapture={removeInCart}>
          {Icon}
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
  );
};

export default ProductCard;
