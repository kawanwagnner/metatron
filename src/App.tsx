import Benefits from "./components/Main/benefits/Benefits";
import Slider from "./components/Main/slider/SliderIndex";
import Navbar from "./components/header/NavBar";
import Categories from "./components/Main/categories/Categories";
import Products from "./components/Main/products/Products";
import AboutWe from "./components/Main/aboutWe/AboutWe";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
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
}

export default App;
