import Benefits from "./components/Main/benefits/Benefits";
import Slider from "./components/Main/slider/SliderIndex";
import Navbar from "./components/header/NavBar";
import Categories from "./components/Main/categories/Categories";
import Products from "./components/Main/products/Products";
import AboutWe from "./components/Main/aboutWe/AboutWe";
import Footer from "./components/Footer/Footer";

import "./App.css";

import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    const handleSelectStart = (event: Event) => {
      event.preventDefault();
    };

    // Adiciona o event listener para o evento contextmenu
    document.addEventListener("contextmenu", handleContextMenu);

    // Adiciona o event listener para o evento selectstart
    document.addEventListener("selectstart", handleSelectStart);

    // Remove os event listeners quando o componente é desmontado
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <Benefits />
      <Categories />
      <Products />
      <AboutWe />
      <Footer />
    </>
  );
};

export default App;
