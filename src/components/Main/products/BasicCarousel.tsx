import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../categories/img/exemplares/produto-n1.webp";
import img2 from "../categories/img/exemplares/produto-n2.jpg";
import img3 from "../categories/img/exemplares/produto-n3.webp";
import img4 from "../categories/img/exemplares/produto-n4.webp";
import img6 from "../categories/img/exemplares/produto-n6.jpg";

import "../categories/css/Categories.css";

const BasicCarousel = () => {
  return (
    <div id="container">
      <Carousel
        showThumbs={false} // Não exibir as miniaturas de navegação
        showStatus={false} // Não exibir o status do carrossel (ex: "3 de 7")
        emulateTouch // Emular comportamento de toque para dispositivos com tela sensível ao toque
        showArrows // Exibir as setas de navegação
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button className="prev" onClick={onClickHandler}>
              <MdKeyboardArrowLeft size={60} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button className="next" onClick={onClickHandler}>
              <MdKeyboardArrowRight size={60} />
            </button>
          )
        }
      >
        {/* Itens do carrossel */}
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
            <img src={img3} alt="#" />
            <div className="category-body">
              <h4>Vestíveis</h4>
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
            <img src={img3} alt="#" />
            <div className="category-body">
              <h4>Vestíveis</h4>
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
      </Carousel>
    </div>
  );
};

export default BasicCarousel;
