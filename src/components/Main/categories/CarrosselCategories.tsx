import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import img1 from "../categories/img/exemplares/produto-n1.webp";
import img2 from "../categories/img/exemplares/produto-n2.jpg";
import img3 from "../categories/img/exemplares/produto-n3.webp";
import img4 from "../categories/img/exemplares/produto-n4.webp";
import img6 from "../categories/img/exemplares/produto-n6.jpg";
import CategoryItem from "./CategoriesItems";

import "./css/Categories.css";

const Categories: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

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

        <motion.div ref={carousel} className="carousel-container" whileTap={{ cursor: "grabbing" }}>
          <motion.div className="carousel">
            <motion.div className="inner" drag="x"
              dragConstraints={{ right: 0, left: - width }}>

              <CategoryItem imageUrl={img1} titleCategory="Tecnologia" />
              <CategoryItem imageUrl={img2} titleCategory="Games" />
              <CategoryItem imageUrl={img3} titleCategory="Vestíveis" />
              <CategoryItem imageUrl={img4} titleCategory="Cozinha" />
              <CategoryItem imageUrl={img6} titleCategory="Mesa" />

            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
