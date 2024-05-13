import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import SingleFood from "../pages/SingleFood/SingleFood";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import ProtectedRoute from "./ProtectedRoute";
import MyPurchasePage from "../pages/MyPurchasePage/MyPurchasePage";
import MyAddedFoodItem from "../pages/MyAddedFoodItem/MyAddedFoodItem";
import FoodPurchaseForm from "../pages/FoodPurchaseForm/FoodPurchaseForm";

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
        element: <AllFoods />,
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
        path: "/food/add",
        element: (
          <ProtectedRoute>
            <AddFoodItem />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mypurchaselist",
        element: (
          <ProtectedRoute>
            <MyPurchasePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myaddeditem",
        element: (
          <ProtectedRoute>
            <MyAddedFoodItem />
          </ProtectedRoute>
        ),
      },
      {
        path: "/purchase",
        element: (
          <ProtectedRoute>
            <FoodPurchaseForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
