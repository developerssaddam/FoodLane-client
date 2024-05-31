import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import usePurchaseData from "../../hooks/usePurchaseData";
import { useEffect, useState } from "react";
import useAuthHooks from "../../hooks/useAuthHooks";
import moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [purchaseFoods] = usePurchaseData();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuthHooks();
  const navigate = useNavigate();

  const totalAmount = purchaseFoods.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  useEffect(() => {
    if (totalAmount > 0) {
      axiosSecure.post("/payment", { price: totalAmount }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalAmount]);

  // handleOnsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardElement);

    // validation
    if (!stripe || !elements) {
      return;
    }

    if (!card) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    // create payment methods
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError.message);
    } else {
      const paymentInfo = {
        name: user.displayName,
        email: user.email,
        transectionId: paymentIntent.id,
        amount: totalAmount,
        status: "Pending",
        date: moment.utc(new Date()),
        foodIds: purchaseFoods.map((item) => item._id),
      };

      // save purchase data to db
      await axiosSecure
        .post("/payment/history", { paymentInfo })
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success("Payment successfull!");
            navigate("/payment/history");
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            className="btn w-full btn-sm px-5 my-5 bg-[#4D4C7D] text-white"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay-Now
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
