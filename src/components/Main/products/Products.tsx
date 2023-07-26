import React, { useEffect, useState } from "react";
import ProductCard from "./ProdutsCard";
import productsData from "../../../APIS/products.json";

import "./css/Products.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulando uma chamada à API:
    // Aqui eu tbm posso substituir por uma chamada real à API externa futuramente.
    setProducts(productsData.products);
  }, []);

  return (
    <div id="produtos">
      <div className="wrapper">
        <h3 className="products-title">Principais produtos:</h3>

        <div id="container-cards">
          <section className="sections">
            <h4 className="section-title">Tecnologia:</h4>
            <div className="product-cards">
              {products
                .filter((product) => product.category === "tecnologia")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>

          <section className="sections">
            <h4 className="section-title">Vestíveis:</h4>
            <div className="product-cards">
              {products
                .filter((product) => product.category === "vestivel")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
