import { motion } from "framer-motion";
import CategoriesItems from "./CategoriesItems";

import "./css/Categories.css";

const Categories: React.FC = () => {

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

        <div className="carousel-container">
          <div className="carousel">
            <CategoriesItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
