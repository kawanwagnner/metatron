import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "../slider/sliderImage";
import "./css/slider.css";

interface SliderProps {
  // Props adicionais do componente, se houver
}

const Slider: React.FC<SliderProps> = () => {
  const len = sliderImage.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [len]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex((prevIndex) => (prevIndex < 1 ? len : prevIndex - 1))
        }
        nextSlide={() =>
          setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
