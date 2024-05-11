import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import SingleFood from "../pages/SingleFood/SingleFood";
import PurchaseFood from "../pages/PurchaseFood/PurchaseFood";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import MyPurchaseList from "../pages/MyPurchaseList/MyPurchaseList";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allfoods",
        element: (
          <ProtectedRoute>
            <AllFoods />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/food/:id",
        element: <SingleFood />,
      },
      {
        path: "/food/buy",
        element: <PurchaseFood />,
      },
      {
        path: "/food/add",
        element: <AddFoodItem />,
      },
      {
        path: "/mylist",
        element: <MyPurchaseList />,
      },
    ],
  },
]);

export default router;
