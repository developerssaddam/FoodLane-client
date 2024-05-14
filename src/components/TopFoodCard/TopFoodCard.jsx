import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopFoodCard = ({ food }) => {
  const { _id, name, photo, price, category } = food;

  return (
    <div className="border shadow-md p-4 rounded-lg">
      <div className="overflow-hidden w-full h-[240px] rounded-lg mb-4">
        <img
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition ease-in-out delay-75"
          src={photo}
          alt=""
        />
      </div>

      <h1 className="text-2xl font-semibold mb-2">
        <span className="font_lobster">Name : {name}</span>
      </h1>
      <div className="flex justify-between text-lg font-medium font_lato">
        <h2 className="">Category : {category}</h2>
        <p>
          Price : $<span className="font_lobster">{price}</span>{" "}
        </p>
      </div>
      <Link to={`/food/${_id}`}>
        <button className="btn bg-[#4D4C7D] w-full text-white mt-4">
          Details
        </button>
      </Link>
    </div>
  );
};

TopFoodCard.propTypes = {
  food: PropTypes.object,
};

export default TopFoodCard;
