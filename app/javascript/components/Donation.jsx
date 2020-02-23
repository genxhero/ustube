import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Donation = props => {
    return (
        <div className="donation">
                <PayPalButton />
        </div>
    )
}

export default Donation;