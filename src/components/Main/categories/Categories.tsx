import React from "react";
import BasicCarousel from "../products/CategoriesCarousel";

import "./css/Categories.css";

const Categories: React.FC = () => {
  return (
    <div id="container" className="categories">
      <div className="wrapper">
        <h3 className="category-title">Nossas categorias:</h3>

        <BasicCarousel />

        <button className="btn-show-all" type="button">
          Mostrar mais categorias
        </button>
      </div>
    </div>
  );
};

export default Categories;
