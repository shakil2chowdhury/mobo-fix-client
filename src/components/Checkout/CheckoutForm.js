import React, { useMemo } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const useOptions = () => {
    const fontSize = "1.2rem";
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    width: "5rem",
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const CheckoutForm = ({handlePayment}) => {
    const [payError, setPayError] = useState(null)
    const [paySuccess, setPaySuccess] = useState(null)
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (payload.error) {
            setPayError(payload.error.message)
            setPaySuccess(null)
        } else {
            setPaySuccess(payload.paymentMethod.id)
            handlePayment(payload.paymentMethod.id)
            console.log(payload);
            setPayError(null)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-2">
            <label>
                Card number
        <CardNumberElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br></br>
            <label>
                Expiration date
        <CardExpiryElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br></br>
            <label>
                CVC
        <CardCvcElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br></br>
            <button type="submit" className="btn btn-secondary mt-4" disabled={!stripe}>
                Proceed to payment
      </button>
            {payError && <p className="text-danger mt-4">{payError}</p>}
            {paySuccess && <p className="text-success mt-4">Payment Completed Successfully.</p>}
        </form>
    );
};

export default CheckoutForm;
