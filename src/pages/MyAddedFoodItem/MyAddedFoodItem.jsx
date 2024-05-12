import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";

const MyAddedFoodItem = () => {
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
              <th>Owner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-gray-200">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Burger</td>
              <td>$120</td>
              <td>Md Saddam hossen</td>
              <th>
                <button
                  className="btn btn-warning btn-sm text-white"
                  onClick={() =>
                    document.getElementById("my_modal").showModal()
                  }
                >
                  <FaRegEdit />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* modal_area */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          {/* close-modal-form */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Update-form */}
          <div>
            <div className="w-full max-w-md p-2 md:p-8 space-y-3 rounded-xl">
              <h1 className="text-2xl font-bold text-center">
                Update
              </h1>
              <form className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">
                    Photo
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Food Name"
                    className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
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
      </dialog>
    </div>
  );
};

export default MyAddedFoodItem;
