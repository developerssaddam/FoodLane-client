import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthHooks from "../../hooks/useAuthHooks";

const MyPurchasePage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHooks();
  const userEmail = user.email;
  const url = `/food/my/purchase?email=${userEmail}`;
  const [purchaseFoods, setPurchaseFoods] = useState([]);

  // Load specific user data
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setPurchaseFoods(res.data);
    });
  }, [axiosSecure, userEmail, url]);

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
            {purchaseFoods.map((food, index) => (
              <tr className="bg-gray-200" key={index}>
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
                <td>{food.time}</td>
                <td>{food.buyerName}</td>
                <th>
                  <button className="btn btn-error btn-sm text-white">
                    <FaRegTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchasePage;
