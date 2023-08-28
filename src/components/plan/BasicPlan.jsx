import React, { useEffect } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

function PayPalSubscriptionButton() {
    // useEffect(() => {
    const paypalSubscribe = (data, actions) => {
        return actions.subscription.create({
            'plan_id': "P-63G8578242237231AMTSNUSY",
        });
    };
    const paypalOnError = (err) => {
        console.log("Error")
    }
    const paypalOnApprove = (data, detail) => {
        // call the backend api to store transaction details
        console.log("Payapl approved")
        console.log(data.subscriptionID)
    };
    const paypalKey = clientId
    return (
        <PayPalButton

            createSubscription={(data, details) => paypalSubscribe(data, details)}
            onApprove={(data, details) => paypalOnApprove(data, details)}
            onError={(err) => paypalOnError(err)}
            catchError={(err) => paypalOnError(err)}
            onCancel={(err) => paypalOnError(err)}
            options={{
                clientId: paypalKey,
                vault: true
            }}
            style={{
                shape: 'rect',
                color: 'blue',
                layout: 'horizontal',
                label: 'subscribe',
            }}
        />
    );
}

export default PayPalSubscriptionButton;
