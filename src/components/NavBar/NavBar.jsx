import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import useAuthHooks from "../../hooks/useAuthHooks";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logoutUser } = useAuthHooks();

  // handleLogoutUser.
  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/allfoods">AllFoods</NavLink>
      </li>

      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#4D4C7D]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="menu"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-white font_lobster">
          FoodLane
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="menu" className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end font_lato">
        {user ? (
          <>
            <div className="dropdown dropdown-end mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/mylist">My added food items</Link>
                </li>
                <li>
                  <Link to="/food/add">Add a food item</Link>
                </li>
                <li>
                  <Link to="/food/buy">My ordered food items</Link>
                </li>
              </ul>
            </div>
            <Link onClick={handleLogoutUser} to="/" className="btn btn-sm">
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
