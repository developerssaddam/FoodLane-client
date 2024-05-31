import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import usePurchaseData from "../../hooks/usePurchaseData";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_PK);
const Payment = () => {
  const [purchaseFoods] = usePurchaseData();
  const totalAmount = purchaseFoods.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between *:bg-[#7a79b9] text-white text-2xl *:px-3 my-14 *:rounded-lg font-semibold">
          <h2>Total Items : {purchaseFoods.length}</h2>
          <h2>Total Amount : $ {totalAmount} </h2>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
