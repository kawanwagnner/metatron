import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiShoppingCartLine, RiWallet3Line } from "react-icons/ri";
import Navbar from "../components/header/NavBar";
import fone from "../components/Main/products/img/fone.png";
import w1 from "../components/Main/products/img/details/w1.png";
import w2 from "../components/Main/products/img/details/w2.png";
import w3 from "../components/Main/products/img/details/w3.png";
import w4 from "../components/Main/products/img/details/w4.png";

import productsData from "../APIS/products.json";

import "../components/Main/products/css/Details.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      const product = productsData.products.find(
        (item: Product) => item.id === Number(id)
      );
      setProduct(product || null);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="main-wrapper">
          <div className="container">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={product.image} alt="FONE DE OUVIDO BLUETH" />
                </div>
                <div className="hover-container">
                  <div>
                    <img src={w1} alt="watch" />
                  </div>
                  <div>
                    <img src={w2} alt="watch" />
                  </div>
                  <div>
                    <img src={w3} alt="watch" />
                  </div>
                  <div>
                    <img src={w4} alt="watch" />
                  </div>
                  <div>
                    <img src={fone} alt="watch" />
                  </div>
                </div>
              </div>
              <div className="product-div-right">
                <span className="product-name">{product.name}</span>
                <span className="product-price">
                  R$ {product.price.toFixed(2)}
                </span>
                <div className="product-rating">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStarHalfAlt />
                  </span>
                  <span>(350 avaliações)</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="btn-groups">
                  <button type="button" className="add-cart-btn">
                    <RiShoppingCartLine />
                    add to cart
                  </button>
                  <button type="button" className="buy-now-btn">
                    <RiWallet3Line />
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
