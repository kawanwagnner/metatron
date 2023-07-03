import Benefits from "./components/Main/benefits/Benefits";
import Slider from "./components/Main/slider/Slider";
import Navbar from "./components/header/NavBar";
import Categories from "./components/Main/categories/Categories";
import Products from "./components/Main/products/Products";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Benefits />
      <Categories />
      <Products />
    </>
  );
}

export default App;
