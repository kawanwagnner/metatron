import React from "react";
import headphoneImage from "./img/fone.png";

import "./css/Products.css";

const Products: React.FC = () => {
  return (
    <div className="produtos">
      <div className="wrapper">
        <h3 className="products-title">Principais produtos:</h3>

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
        </div>
        <div className="next-products">
          <p>________</p>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <p>________</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
