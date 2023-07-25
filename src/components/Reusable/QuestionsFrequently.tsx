import React from "react";
import banner from "./img/Banner-fones.png";
import "./css/QuestionsFrequently.css";

const QuestionsFrequently: React.FC = () => {
  return (
    <>
      <div id="container-QuestionsFrequently">
        <img
          className="banner-promotion"
          src={banner}
          alt="Banner promocional, fones de ouvido inteligente."
        />
      </div>
    </>
  );
};

export default QuestionsFrequently;
