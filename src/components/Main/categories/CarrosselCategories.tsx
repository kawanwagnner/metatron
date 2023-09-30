import React, { useState } from "react";
import { motion } from "framer-motion";
import CategoriesItems from "./CategoriesItems";

import "./css/Categories.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Categories: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <div className="category" />,
    <div className="category" />,
    <div className="category" />,
  ];

  const slideWidth = 260; // Defina a largura do slide aqui

  const trackStyle = {
    width: `${slides.length * slideWidth}px`,
    transform: `translate3d(-${currentSlide * slideWidth}px, 0, 0)`,
    transition: "transform 0.5s ease",
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div id="container" className="categories">
      <div className="wrapper">
        <motion.h3
          initial={{ opacity: 0, x: -500, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="category-title"
        >
          Nossas categorias:
        </motion.h3>

        <motion.div className="carousel-container">
          <div className="carousel-track" style={trackStyle}>
            {slides.map((_, index) => (
              <motion.div
                key={index}
                className="carousel-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <CategoriesItems />
              </motion.div>
            ))}
          </div>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-ukcdk3 button-prev"
            onClick={prevSlide}
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-ukcdk3 button-next"
            onClick={nextSlide}
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </motion.div>

        {/* <button className="btn-show-all" type="button">
          Mostrar mais categorias
        </button> */}
      </div>
    </div>
  );
};

export default Categories;