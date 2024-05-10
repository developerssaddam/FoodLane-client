import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
