import React from 'react';

import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HCXzgJjcR3l9bANiBLZowdBG4UUt6qjyDqOQcAku7mr15OZLKr2Exxzw6xODUuvb3UhTbE8dfktpGFm7v9RHTvd00S3T3EsoO';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  };
  return (
    <StripeCheckOut
      label="Pay Now"
      name="Beck Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
