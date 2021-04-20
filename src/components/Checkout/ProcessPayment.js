import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Igo45HcDYGipcrtc7qL0cWyVa03SXLETXDpb6DJU8fuJ4ZlPWl9cKGkUqLSyjrEk5HZMfDE3l8tYW7q88l8D7iX00dvQJ7hBB');


const ProcessPayment = ({handlePayment}) => {
    return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
    </Elements>

    );
};

export default ProcessPayment;