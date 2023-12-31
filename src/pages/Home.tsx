import Benefits from "../components/Main/benefits/Benefits";
import Categories from "../components/Main/categories/CarrosselCategories";
// import AboutUs from "../components/Main/aboutWe/AboutUs";
import Footer from "../components/Footer/Footer";
import Products from "../components/Main/products/Products";
import Navbar from "../components/header/NavBar";
import Carousel from "../components/Main/slider/SliderIndex";
import { Box } from "@mui/material";
import AboutUs from "../components/Main/aboutWe/AboutUs";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Benefits />
      <Categories />
      <Products />
      <AboutUs />
      <Box m={50} />
      <Footer />
    </>
  );
};

export default Home;
