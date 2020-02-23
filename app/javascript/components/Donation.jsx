import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Donation = props => {
    return (
        <div className="donation">
            <p>Ads don't pay for everything - if you really like this website please donate using the buttons below.</p>
            <p></p>
                <PayPalButton />
        </div>
    )
}

export default Donation;