import React from "react";

import "./css/Categories.css";

import * as img1 from "./img/exemplares/produto-n1.webp";
import * as img2 from "./img/exemplares/produto-n2.jpg";
import * as img3 from "./img/exemplares/produto-n3.webp";
import * as img4 from "./img/exemplares/produto-n4.webp";
import * as img6 from "./img/exemplares/produto-n6.jpg";
import * as img7 from "./img/exemplares/produto-n7.webp";

const Categories: React.FC = () => {
  return (
    <div id="container" className="categories">
      <div className="wrapper">
        <h3 className="category-title">Nossas categorias:</h3>

        <div className="categories-container">
          <div className="category">
            <img src={img1.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img2.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img3.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img4.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
            <h4>Categoria</h4>
            <div className="__bg-overlay"></div>
          </div>

          <div className="category">
            <img src={img6.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img7.default} alt="" />
            <div className="category-body">
              <h4>Categoria</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>
        </div>

        <button className="btn-show-all" type="button">
          Mostrar mais categorias
        </button>
      </div>
    </div>
  );
};

export default Categories;
