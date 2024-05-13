import { Helmet } from "react-helmet-async";
import useAuthHooks from "../../hooks/useAuthHooks";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddFoodItem = () => {
  const { user } = useAuthHooks();
  const axiosSecure = useAxiosSecure();

  // handleAddFoodItem
  const handleAddFoodItem = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const country = form.country.value;
    const photo = form.photo.value;
    const desc = form.desc.value;

    const newFood = {
      name,
      category,
      quantity,
      price,
      userName,
      userEmail,
      country,
      photo,
      desc,
      count: 0,
    };

    axiosSecure
      .post("/food/add", newFood)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Added food item successfully!");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>FoodLane | Add</title>
      </Helmet>

      <section className="max-w-3xl mx-auto my-16">
        <form
          onSubmit={handleAddFoodItem}
          className="p-3 rounded-md shadow-sm bg-gray-200"
        >
          <h2 className="text-xl font-bold text-center mb-3">Add Food</h2>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Food Name</label>
              <input
                name="name"
                type="text"
                placeholder="Food Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Food Category</label>
              <input
                name="category"
                type="text"
                placeholder="Food Category"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Quantity</label>
              <input
                name="quantity"
                type="text"
                placeholder="Food Quantity"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Food Price</label>
              <input
                name="price"
                type="text"
                placeholder="Food Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">User Name</label>
              <input
                name="userName"
                value={user.displayName}
                readOnly
                type="text"
                placeholder="User Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">User Email</label>
              <input
                name="userEmail"
                value={user.email}
                readOnly
                type="text"
                placeholder="User Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Country</label>
              <input
                name="country"
                type="text"
                placeholder="Country"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Photo</label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Description</label>
              <input
                name="desc"
                type="text"
                placeholder="Sort-Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 px-4 py-2"
              />
            </div>
          </div>
          <div className="col-span-full my-6">
            <input
              type="submit"
              value="Add-Now"
              className="bg-[#4D4C7D] w-full text-white py-3"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddFoodItem;
