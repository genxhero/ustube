import React, {useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const Advertisement = props => {
     const [visible, toggleVisibility] = useState(true)
    return (
      <div className={`advertisement ${visible ? "" : "hidden"}`}>
        <div className={`ad-content ${visible ? "" : "hidden"}`}>
          Your Ad Here
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