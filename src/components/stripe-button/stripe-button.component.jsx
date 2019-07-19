import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // stripe need the value of the articles in cents
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
  // this is the public key we get from stripe dev dashboard

  const onToken = token => {
    // this is not a class component so it doesn't have methods, so we have to declare this as a traditional function using const
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      currency="EUR"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      // token is the onsuccess callback that triggers when we submit
      // submission is triggered by this component and the token is the confirmation
      // we add this further in the course since this needs the backend part of stripe
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
