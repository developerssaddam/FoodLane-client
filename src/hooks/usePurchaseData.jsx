import { useQuery } from "@tanstack/react-query";
import useAuthHooks from "./useAuthHooks";
import useAxiosSecure from "./useAxiosSecure";

const usePurchaseData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHooks();
  const email = user?.email;
  const { data: purchaseFoods = [], refetch } = useQuery({
    queryKey: ["purchaseData", email],

    queryFn: async () => {
      if (!email) return [];
      const res = await axiosSecure.get(`/food/my/purchase?email=${email}`);
      return res.data;
    },
  });

  return [purchaseFoods, refetch];
};

export default usePurchaseData;
