import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SingleFood = () => {
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
              src="https://thumbs.dreamstime.com/b/young-people-eating-sushi-restaurant-asian-44693451.jpg?w=768"
              alt=""
            />
          </div>

          <div className="my-10 space-y-3 font_lato p-2">
            <h2 className="text-2xl font-bold font_lobster">Food Name</h2>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <h2 className="text-lg font-semibold">Category : Category</h2>
              <p className="text-lg font-semibold">
                Price : <span className="font_lobster">$120</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
              <h2 className="text-lg font-semibold">
                Made-By : <span>Made by</span>
              </h2>
              <h2 className="text-lg font-semibold">Country : Country</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              pariatur. Consequuntur vero at, atque veniam asperiores architecto
              excepturi sapiente sunt, eligendi inventore dolor mollitia eveniet
              non rem! Deleniti perspiciatis sapiente magni error. Saepe
              officiis aliquam ut laboriosam repellat magnam vero ab autem, non
              excepturi sit exercitationem, reiciendis quidem sint omnis.
            </p>

            <div className="flex justify-end">
              <Link to="/purchase">
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
