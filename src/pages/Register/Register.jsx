import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import useAuthHooks from "../../hooks/useAuthHooks";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { createUser } = useAuthHooks();
  const passCheck = /(?=.*[A-Z])(?=.*[a-z]){6,}/;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // handleShowHidePassword
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // handleCreateUser
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const user = {
      name,
      email,
      photo,
    };

    // form validation
    if (!name || !email || !photo || !password) {
      return toast.error("All fields are required!");
    }

    // password validation
    if (!passCheck.test(password)) {
      return toast.warn(
        "Password must be at least six character with lowercase and uppercase letter!"
      );
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            axiosSecure.post("/foodlane/users", user).then((res) => {
              if (res.data.acknowledged) {
                toast.success("User registration successfull!");
              }
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });

        form.reset();
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      {" "}
      <Helmet>
        <title>FoodLane | Register</title>
      </Helmet>
      <div className="my-8 flex justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border shadow-md">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form onSubmit={handleCreateUser} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Name</label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border shadow-sm focus:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border shadow-sm focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md border shadow-sm focus:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm relative">
              <label className="block text-gray-600">Password</label>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border shadow-sm focus:border-violet-400"
              />
              <span
                className="absolute right-5 top-9 cursor-pointer"
                onClick={handleShowHidePassword}
              >
                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </span>
              <div className="flex justify-end text-xs text-gray-400">
                <Link>Forgot Password?</Link>
              </div>
            </div>

            <button className="block w-full p-3 text-center rounded-sm bg-[#4D4C7D] text-white">
              Sign Up
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link to="/login" className="underline text-[#4D4C7D]">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
