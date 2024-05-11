import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TopFoodCardContainer from "./TopFoodCardContainer/TopFoodCardContainer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FoodLane | Home</title>
      </Helmet>

      <div>
        <Slider />
        <TopFoodCardContainer />
      </div>
    </div>
  );
};

export default Home;
