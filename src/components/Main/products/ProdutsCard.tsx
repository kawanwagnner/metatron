import React from "react";

import "./css/Products.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={product.image} alt="" />
      </div>
      <div className="contentBx">
        <h3>{product.name}</h3>
        <h2 className="price">
          R$ {product.price.toFixed(2)}
          <small></small>
        </h2>
        <a href={`/details/${product.id}`} className="buy">
          Compre Agora
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
