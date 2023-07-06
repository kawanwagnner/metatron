import React from "react";
import headphoneImage from "./img/fone.png";

import "./css/Products.css";

const Products: React.FC = () => {
  return (
    <div id="produtos" className="container">
      <div className="container-sub-header">
        <h3 className="products-title">Principais produtos:</h3>
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
      <div className="next-products">
        <p>----</p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <p>----</p>
      </div>
    </div>
  );
};

export default Products;
