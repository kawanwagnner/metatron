import React from "react";

interface SliderContentProps {
  activeIndex: number;
  sliderImage: {
    urls: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const SliderContent: React.FC<SliderContentProps> = ({
  activeIndex,
  sliderImage,
}) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="container-text-banners">
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
            <button className="slide-button">{slide.link}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
