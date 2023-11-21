import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProdutsCard";
import productsData from "../../../APIS/products.json";

import "./css/Products.css";
import QuestionsFrequently from "../../Reusable/QuestionsFrequently";
import { Box } from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const carousel = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Simulando uma chamada à API:
    // Aqui eu tbm posso substituir por uma chamada real à API externa futuramente.
    setProducts(productsData.products);
  }, []);

  return (
    <div id="produtos">
      <div className="wrapper">
        <motion.h3
          initial={{ opacity: 0, x: -500, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="products-title"
        >
          Principais produtos:
        </motion.h3>

        <div id="container-cards">

          <h4 className="section-title">Tecnologia:</h4>
          <motion.section ref={carousel} className="sections carousel-container" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="product-cards" drag="x"
              dragConstraints={{ right: 0, left: - 650 }}>
              {products
                .filter((product) => product.category === "tecnologia")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>
          </motion.section>

          <h4 className="section-title">Vestíveis:</h4>
          <motion.section ref={carousel} className="sections carousel-container" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="product-cards" drag="x"
              dragConstraints={{ right: 0, left: - 650 }}>

              {products
                .filter((product) => product.category === "tecnologia")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>
          </motion.section>

          {/* <Box marginTop={35} /> */}
          {/* <Box marginBottom={-20} /> */}

          <h4 className="section-title">Tecnologia:</h4>
          <motion.section ref={carousel} className="sections carousel-container" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="product-cards" drag="x"
              dragConstraints={{ right: 0, left: - 650 }}>
              {products
                .filter((product) => product.category === "tecnologia")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>
          </motion.section>

          <h4 className="section-title">Vestíveis:</h4>
          <motion.section ref={carousel} className="sections carousel-container" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="product-cards" drag="x"
              dragConstraints={{ right: 0, left: - 650 }}>
              {/*  */}
              {products
                .filter((product) => product.category === "tecnologia")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>
          </motion.section>
          <QuestionsFrequently />

        </div>
      </div>
    </div >
  );
};

export default Products;
