import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthHooks from "../../hooks/useAuthHooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyAddedFoodItem = () => {
  const { user } = useAuthHooks();
  const axiosSecure = useAxiosSecure();
  const userEmail = user.email;
  const [addedFood, setAddedFood] = useState([]);
  const [clickedCurrentFood, setClickedCurrentFood] = useState({});
  const url = `/food/my/added?email=${userEmail}`;

  // handleUpdateAddedItem
  const handleUpdateAddedItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const updatedData = {
      id: clickedCurrentFood._id,
      userName: clickedCurrentFood.userName,
      photo,
      name,
      price,
      quantity,
    };

    axiosSecure
      .put("/food/myadded/update", updatedData)
      .then((res) => {
        if (res.data.acknowledged) {
          const remainingFood = addedFood.filter(
            (food) => food._id !== clickedCurrentFood._id
          );
          const updatedFood = updatedData;
          const newAddedFood = [updatedFood, ...remainingFood];
          setAddedFood(newAddedFood);
          toast.success("Updated successfull!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Load specific user data
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setAddedFood(res.data);
    });
  }, [axiosSecure, userEmail, url]);

  return (
    <div>
      {" "}
      <Helmet>
        <title>FoodLane | My-Added-List</title>
      </Helmet>
      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
        <h1 className="text-2xl md:text-4xl font-bold">My-Added-List</h1>
        <p className="font-medium">
          Embark on a gastronomic journey with our exclusive selection of
          top-tier dishes, meticulously crafted to captivate your senses and
          palate.
        </p>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-700 text-white">
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Owner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addedFood.map((food, index) => (
              <tr key={index} className="bg-gray-200">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={food.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{food.name}</td>
                <td>$ {food.price}</td>
                <td>{food.quantity}</td>
                <td>{food.userName}</td>
                <th>
                  <button
                    className="btn btn-warning btn-sm text-white"
                    onClick={() => {
                      document.getElementById("my_modal").showModal();
                      setClickedCurrentFood(food);
                    }}
                  >
                    <FaRegEdit />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal_area */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          {/* Update-form */}
          <div>
            <div className="w-full max-w-md p-2 md:p-8 space-y-3 rounded-xl">
              <h1 className="text-2xl font-bold text-center">Update</h1>
              <form onSubmit={handleUpdateAddedItem} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">Photo</label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={clickedCurrentFood.photo}
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">Food Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={clickedCurrentFood.name}
                    placeholder="Food Name"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">Price</label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={clickedCurrentFood.price}
                    placeholder="Price"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={clickedCurrentFood.quantity}
                    placeholder="Quantity"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <button
                  type="submit"
                  className="block w-full p-3 text-center rounded-sm text-white bg-[#4D4C7D]"
                >
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyAddedFoodItem;
