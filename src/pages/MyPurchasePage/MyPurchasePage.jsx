import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthHooks from "../../hooks/useAuthHooks";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyPurchasePage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHooks();
  const userEmail = user.email;
  const url = `/food/my/purchase?email=${userEmail}`;
  const [purchaseFoods, setPurchaseFoods] = useState([]);

  // handleDeletePurchaseItem
  const handleDeletePurchaseItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/food/my/purchase/remove?id=${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });

              const remainingFoods = purchaseFoods.filter(
                (food) => food._id !== id
              );
              setPurchaseFoods(remainingFoods);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

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
      <div className="max-w-5xl mx-auto my-4 text-end">
        <Link to="/payment">
          <button className="btn btn-sm bg-[#4D4C7D] text-white">
            Pay-Now
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-700 text-white">
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Buying Date</th>
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
                  <button
                    onClick={() => handleDeletePurchaseItem(food._id)}
                    className="btn btn-error btn-sm text-white"
                  >
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
