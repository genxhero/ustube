import React, {useState} from 'react';
import {FaArrowAltCircleLeft} from 'react-icons/fa';

const Advertisement = props => {
     const [visible, toggleVisibility] = useState(true)
    return (
        <div className="advertisement">
            <div>Your Ad Here </div>
            <div className={"hide-btn-left"} onClick={() => toggleVisibility(false)}>
                <FaArrowAltCircleLeft />
            </div>
        </div>
    )
}

export default Advertisement;