import React, {useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

/**
 * This is meant for adverts, drawn from a separate ads api.
 * 
 */

const Advertisement = props => {
     const [visible, toggleVisibility] = useState(true)
    return (
      <div className={`advertisement ${visible ? "" : "hidden"}`}>
        <div className={`ad-content ${visible ? "" : "hidden"}`}>
          <span>Your Ad Here </span>
        </div>
        {visible ? (
          <div
            className={"show-hide-toggle"}
            onClick={() => toggleVisibility(false)}
          >
            <FaArrowAltCircleLeft />
          </div>
        ) : (
          <div
            className={"show-hide-toggle"}
            onClick={() => toggleVisibility(true)}
          >
            <FaArrowAltCircleRight />
          </div>
        )}
      </div>
    );
}

export default Advertisement;