import { useQuery } from "@tanstack/react-query";
import useAuthHooks from "../../hooks/useAuthHooks";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuthHooks();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment/history?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-3xl text-center font-semibold my-10">
        Payment History
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-300">
            <tr>
              <th>Sl-No</th>
              <th>Email</th>
              <th>TransectionId</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.transectionId}</td>
                <td>{payment.date}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
