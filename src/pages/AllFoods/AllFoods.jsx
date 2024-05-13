import { Helmet } from "react-helmet-async";
import "./AllFoods.css";
import AllFoodCard from "./AllFoodCard";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    axiosSecure.get("/allfoods").then((res) => {
      setAllFoods(res.data);
    });
  }, [axiosSecure]);

  // handleSearch
  const handleSearch = () => {
    const inputTag = document.getElementById("search");
    const inputValue = inputTag.value;
    console.log(inputValue);
  };

  return (
    <div>
      <Helmet>
        <title>FoodLane | AllFoods</title>
      </Helmet>

      <div>
        <div className="relative img_area max-w-7xl mx-auto rounded-2xl my-10">
          <img
            className="w-full h-[150px] md:h-[300px] object-cover rounded-2xl"
            src="https://i.ibb.co/W2MdZbs/65.jpg"
            alt=""
          />
          <div className="absolute top-1/3 left-1/4 md:top-1/2 md:left-1/3 text-white text-center space-y-3 z-10">
            <h1 className="text-xl md:text-4xl font-semibold">ALL-FOOD-LIST</h1>
            <p className="font-medium">
              {" "}
              <span className="text-[#a63aef]">Home</span> | All-Foods
            </p>
          </div>
        </div>

        <div className="search max-w-7xl mx-auto flex justify-end mb-10">
          <div className="border rounded-lg max-w-[280px] flex justify-between">
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="px-4 py-2 outline-none rounded-l-lg"
            />
            <button
              type="search"
              onClick={handleSearch}
              className="bg-[#4D4C7D] px-3 py-2 text-white rounded-r-lg"
            >
              <IoSearchSharp />
            </button>
          </div>
        </div>

        <div className="allFoodCardContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 mb-8">
          {allFoods.map((food, index) => (
            <AllFoodCard key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
