import React from "react";
import headphoneImage from "./img/fone.png";

import "./css/Products.css";

const Products: React.FC = () => {
  return (
    <div id="produtos" className="container">
      <div className="col-12">
        <h2 className="products-title">Principais produtos:</h2>
        <p className="subtitle color-grey">Material: Aço inoxidável;</p>
      </div>

      <div id="container-cards">
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={headphoneImage} alt="" />
          </div>
          <div className="contentBx">
            <h3>Wireless Headphone</h3>
            <h2 className="price">
              R$ 49.<small>99</small>
            </h2>
            <a href="details.html" className="buy">
              Compre Agora
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Products;
