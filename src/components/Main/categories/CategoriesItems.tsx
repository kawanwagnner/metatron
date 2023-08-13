import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../categories/img/exemplares/produto-n1.webp";
import img2 from "../categories/img/exemplares/produto-n2.jpg";
import img3 from "../categories/img/exemplares/produto-n3.webp";
import img4 from "../categories/img/exemplares/produto-n4.webp";
import img6 from "../categories/img/exemplares/produto-n6.jpg";

import "../categories/css/Categories.css";

// const CategoriesContainer: any = document.querySelector(".category-container");

// CategoriesContainer.map((item: String) => {
//   const ItemsCategories = [item];
//   return console.log(ItemsCategories);
// });

const BasicCarousel = () => {
  return (
    <div id="container">
      <div>
        <div className="categories-container">
          <div className="category">
            <img src={img1} alt="#" />
            <div className="category-body">
              <h4>Tecnologia</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img2} alt="#" />
            <div className="category-body">
              <h4>Games</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img3} alt="#" />
            <div className="category-body">
              <h4>Vestíveis</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img4} alt="#" />
            <div className="category-body">
              <h4>Cozinha</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>

          <div className="category">
            <img src={img6} alt="#" />
            <div className="category-body">
              <h4>Mesa</h4>
              <div className="__bg-overlay"></div>
            </div>
          </div>
        </div>
        {""}
      </div>
    </div>
  );
};

export default BasicCarousel;
