import { Link } from "react-router-dom";

const TopFoodCard = () => {
  return (
    <div className="border shadow-md p-4 rounded-lg">
      <div className="overflow-hidden w-full h-[240px] rounded-lg mb-4">
        <img
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition ease-in-out delay-75"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOox5fPYwAezLw_zXxWz8IEMi6WH4mUh544eUoDFAZ-A&s"
          alt=""
        />
      </div>

      <h1 className="text-2xl font-semibold mb-2">
        <span className="font_lobster">Name : Burger</span>
      </h1>
      <div className="flex justify-between text-lg font-medium font_lato">
        <h2 className="">Category : Category</h2>
        <p>
          Price : $<span className="font_lobster">120</span>{" "}
        </p>
      </div>
      <Link to="/food/1">
        <button className="btn bg-[#4D4C7D] w-full text-white mt-4">
          Details
        </button>
      </Link>
    </div>
  );
};

export default TopFoodCard;
