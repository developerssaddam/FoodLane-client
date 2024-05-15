import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TopFoodCardContainer from "./TopFoodCardContainer/TopFoodCardContainer";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FoodLane | Home</title>
      </Helmet>

      <div>
        <Slider />
        <TopFoodCardContainer />
        <AboutUs />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
