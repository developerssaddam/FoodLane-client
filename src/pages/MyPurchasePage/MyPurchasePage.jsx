import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";

const MyPurchasePage = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>FoodLane | My-Purchase-List</title>
      </Helmet>

      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
        <h1 className="text-2xl md:text-4xl font-bold">My-Purchase-List</h1>
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
              <th>Added-Time</th>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
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
              <td>01-12-2024</td>
              <td>Md Saddam hossen</td>
              <th>
                <button className="btn btn-error btn-sm text-white">
                  <FaRegTrashAlt />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchasePage;
