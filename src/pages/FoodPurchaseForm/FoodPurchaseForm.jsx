import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthHooks from "../../hooks/useAuthHooks";
import { toast } from "react-toastify";

const FoodPurchaseForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentFood, setCurrentFood] = useState({});
  const { _id, name, price, count } = currentFood;

  // CurrentFood Data loaded
  useEffect(() => {
    axiosSecure.get(`/food/${id}`).then((res) => {
      setCurrentFood(res.data);
    });
  }, [axiosSecure, id]);

  // handleFoodPurchase
  const handleFoodPurchase = (e) => {
    e.preventDefault();
    const currentQuantity = parseInt(currentFood.quantity);

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;

    const newPurchaseFood = {
      name,
      price,
      quantity,
      buyerName,
      buyerEmail,
      time: Date.now(),
    };

    // Validation quantity
    if (currentQuantity === 0) {
      return toast.warn("Out of stock!");
    }

    if (currentQuantity < quantity) {
      return toast.warn(
        `You can purchase only ${currentQuantity} items or less!`
      );
    }

    if (quantity === "0") {
      return toast.warn("You must purchase atleast one item!");
    }

    // Send data to mongoDb
    axiosSecure
      .post("/food/purchase", newPurchaseFood)
      .then((res) => {
        // update foodCollections of quantity and count
        axiosSecure.put("/food/update", {
          id: _id,
          count: count + parseInt(quantity),
          quantity: currentQuantity - parseInt(quantity),
        });
        // if Successfull.
        if (res.data.acknowledged) {
          toast.success("Congratulations! purchase done!");
        }
        navigate("/allfoods");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      {" "}
      <Helmet>
        <title>FoodLane | Purchase-Form</title>
      </Helmet>
      <div>
        <section className="p-6">
          <form
            onSubmit={handleFoodPurchase}
            className="container w-full max-w-xl md:p-8 mx-auto space-y-6 rounded-md shadow-lg bg-gray-200"
          >
            <h2 className="w-full text-3xl font-bold leading-tight">
              Purchase Form
            </h2>

            <div>
              <label className="block mb-1 ml-1">Food Name</label>
              <input
                name="name"
                defaultValue={name}
                readOnly
                type="text"
                placeholder="Food name"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>

            <div>
              <label className="block mb-1 ml-1">Price</label>
              <input
                name="price"
                defaultValue={price}
                type="text"
                placeholder="Food Price"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>

            <div>
              <label className="block mb-1 ml-1">Quantity</label>
              <input
                name="quantity"
                defaultValue={0}
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
                defaultValue={user.displayName}
                readOnly
                placeholder="Buyer Name"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>

            <div>
              <label className="block mb-1 ml-1">Buyer Email</label>
              <input
                name="buyerEmail"
                defaultValue={user.email}
                readOnly
                type="text"
                placeholder="Buyer Email"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 border"
              />
            </div>

            <div>
              <button
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
