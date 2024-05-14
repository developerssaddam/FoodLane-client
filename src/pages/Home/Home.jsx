import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TopFoodCardContainer from "./TopFoodCardContainer/TopFoodCardContainer";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FoodLane | Home</title>
      </Helmet>

      <div>
        <Slider />
        <TopFoodCardContainer />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
