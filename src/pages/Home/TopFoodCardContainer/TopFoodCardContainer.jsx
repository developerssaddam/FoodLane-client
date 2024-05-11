import { Link } from "react-router-dom";
import TopFoodCard from "../../../components/TopFoodCard/TopFoodCard";
import { FaArrowRightLong } from "react-icons/fa6";

const TopFoodCardContainer = () => {
  return (
    <div className="my-16">
      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
        <h1 className="text-4xl font-bold">Top-Foods</h1>
        <p className="font-medium">
          Embark on a gastronomic journey with our exclusive selection of
          top-tier dishes, meticulously crafted to captivate your senses and
          palate.
        </p>
      </div>
      <div className="cardContainer max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* item-1 */}
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/allfoods"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4D4C7D] group-hover:translate-x-0 ease">
            <FaArrowRightLong />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            See-All
          </span>
          <span className="relative invisible">Button Text</span>
        </Link>
      </div>
    </div>
  );
};

export default TopFoodCardContainer;
