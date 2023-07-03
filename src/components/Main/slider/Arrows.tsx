import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Arrows: React.FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <MdKeyboardArrowLeft />
      </span>
      <span className="next" onClick={nextSlide}>
        <MdKeyboardArrowRight />
      </span>
    </div>
  );
};

export default Arrows;
