import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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

    // create payment methods
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log("payment methods", paymentMethod);
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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
