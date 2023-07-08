import React from "react";

interface Slide {
  title: string;
  urls: string;
}

interface DotsProps {
  activeIndex: number;
  onClick: (index: number) => void;
  sliderImage: Slide[];
}

const Dots: React.FC<DotsProps> = ({ activeIndex, onClick, sliderImage }) => {
  return (
    <div className="all-dots">
      {sliderImage.map((_, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
