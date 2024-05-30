import axios from "axios";
import useAuthHooks from "./useAuthHooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuthHooks();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser();
          axiosSecure.post("/user/logout");
          navigate("/login");
        }
      }
    );
  }, [logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
