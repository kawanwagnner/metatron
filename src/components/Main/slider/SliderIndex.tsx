import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "./img/banner-1.png";
import img2 from "./img/banner-2.png";
import img3 from "./img/banner-3.png";

const Carousel: React.FC = () => {
  const images = [img1, img2, img3];

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
      <button onClick={handlePrev}>Previous</button>

      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Carousel Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button onClick={handleNext}>Next</button>

      <div style={{ marginTop: "1rem" }}>
        {images.map((_, index) => (
          <motion.span
            key={index}
            style={{
              display: "inline-block",
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              // margin: "0 0.25rem",
              background: index === currentIndex ? "red" : "gray",
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
