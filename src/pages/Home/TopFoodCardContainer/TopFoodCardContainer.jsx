import { Link } from "react-router-dom";

const TopFoodCardContainer = () => {
  return (
    <div className="my-16">
      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-14 p-5">
        <h1 className="text-4xl font-bold">Top-Foods</h1>
        <p className="font-medium">
          Embark on a gastronomic journey with our exclusive selection of
          top-tier dishes, meticulously crafted to captivate your senses and
          palate.
        </p>
      </div>
      <div className="topFoodCard">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOox5fPYwAezLw_zXxWz8IEMi6WH4mUh544eUoDFAZ-A&s"
          alt=""
        />

        <h1>Burger</h1>
        <div>
          <h2>Category : Category</h2>
          <p>
            Price : $<span>120</span>{" "}
          </p>
        </div>
        <Link>Details</Link>
      </div>
    </div>
  );
};

export default TopFoodCardContainer;
