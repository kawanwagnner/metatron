import Benefits from "../components/Main/benefits/Benefits";
import Categories from "../components/Main/categories/Categories";
import AboutUs from "../components/Main/aboutWe/AboutUs";
import Footer from "../components/Footer/Footer";
import Products from "../components/Main/products/Products";
import Navbar from "../components/header/NavBar";
import Carousel from "../components/Main/slider/SliderIndex";
import QuestionsFrequently from "../components/Reusable/QuestionsFrequently";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Benefits />
      <Categories />
      <Products />
      <AboutUs />
      <QuestionsFrequently />
      <Footer />
    </>
  );
};

export default Home;
