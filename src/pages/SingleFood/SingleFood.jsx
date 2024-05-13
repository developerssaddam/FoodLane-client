import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const SingleFood = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { _id, name, photo, category, price, desc, country, userName } = food;

  useEffect(() => {
    axiosSecure.get(`/food/${id}`).then((res) => {
      setFood(res.data);
    });
  }, [axiosSecure, id]);

  return (
    <div>
      <Helmet>
        <title>FoodLane | Details</title>
      </Helmet>
      <div>
        <div className="relative img_area max-w-7xl mx-auto rounded-2xl my-10">
          <img
            className="w-full h-[150px] md:h-[300px] object-cover rounded-2xl"
            src="https://i.ibb.co/tsTP2cB/43.jpg"
            alt=""
          />
          <div className="absolute top-1/3 left-1/4 md:top-1/2 md:left-1/3 text-white text-center space-y-3 z-10">
            <h1 className="text-xl md:text-4xl font-semibold">FOOD-DETAILS</h1>
            <p className="font-medium">
              {" "}
              <span className="text-[#a63aef]">Home</span> | Details
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div>
            <img
              className="w-full max-h-[350px] object-cover rounded-md"
              src={photo}
              alt=""
            />
          </div>

          <div className="my-10 space-y-3 font_lato p-2">
            <h2 className="text-2xl font-bold font_lobster">Name : {name}</h2>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <h2 className="text-lg font-semibold">Category : {category}</h2>
              <p className="text-lg font-semibold">
                Price : <span className="font_lobster">$ {price}</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <h2 className="text-lg font-semibold">
                Made-By : <span>{userName}</span>
              </h2>
              <h2 className="text-lg font-semibold">Country : {country}</h2>
            </div>
            <p>{desc}</p>

            <div className="flex justify-end">
              <Link to={`/purchase/${_id}`}>
                <button className="bg-[#4D4C7D] text-white btn px-8">
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
