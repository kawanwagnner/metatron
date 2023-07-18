import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "./css/slider.css";

import img1 from "./img/especial.png";
import img2 from "./img/cupom.png";
// import img3 from "./img/Talk to us.png";

const Carousel: React.FC = () => {
  const images = [img1, img2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="container-slider">
        <button className="prev" onClick={handlePrev}>
          <MdKeyboardArrowLeft />
        </button>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Carousel Image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />{" "}
          {/* <div className="text-slider">
            <motion.h1 key={currentIndex} transition={{ duration: 0.5 }}>
              {currentIndex === 0 && <span>Correntes e Acessórios</span>}
              {currentIndex === 1 && <span>Tecnologia e inovação</span>}
              {currentIndex === 2 && <span>Os MELHORES PREÇOS!</span>}
            </motion.h1>
          </div> */}
        </AnimatePresence>
        <button className="next" onClick={handleNext}>
          <MdKeyboardArrowRight />
        </button>
      </div>

      <div className="all-dots" style={{ marginTop: "1rem" }}>
        {images.map((_, index) => (
          <motion.span
            key={index}
            style={{
              display: "inline-block",
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
              margin: "0 0.25rem",
              cursor: "pointer",
              background: index === currentIndex ? "#0000ff" : "#444",
            }}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
