import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const FoodPurchaseForm = () => {
  const navigate = useNavigate();

  // handleFoodPurchase
  const handleFoodPurchase = (e) => {
    e.preventDefault();
    navigate("/mypurchaselist");
  };

  return (
    <div>
      {" "}
      <Helmet>
        <title>FoodLane | Purchase-Form</title>
      </Helmet>
      <div>
        <section className="p-6">
          <form className="container w-full max-w-xl md:p-8 mx-auto space-y-6 rounded-md shadow-lg bg-gray-200">
            <h2 className="w-full text-3xl font-bold leading-tight">
              Purchase Form
            </h2>
            <div>
              <label className="block mb-1 ml-1">Food Name</label>
              <input
                name="name"
                type="text"
                placeholder="Food name"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Price</label>
              <input
                name="price"
                type="text"
                placeholder="Food Price"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Quantity</label>
              <input
                name="● quantity"
                type="text"
                placeholder="Quantity"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Buyer Name</label>
              <input
                name="buyerName"
                type="text"
                placeholder="Buyer Name"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Buyer Email</label>
              <input
                name="buyerEmail"
                type="text"
                placeholder="Buyer Email"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Date</label>
              <input
                name="date"
                type="date"
                placeholder="Date"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>
            <div>
              <button
                onClick={handleFoodPurchase}
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#4D4C7D] focus:ring-violet-400 hover:ring-violet-400 text-white"
              >
                purchase
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FoodPurchaseForm;
