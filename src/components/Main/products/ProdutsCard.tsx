import React from "react";
import { BsBagHeart } from "react-icons/bs";

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
  return (
    <div className="card">
      <div className="btn-add-cart">
        <BsBagHeart size={25} />
      </div>
      <div className="imgBx">
        <img src={product.image} alt="Algo deu errado. :-(" />
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
