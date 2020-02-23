import React, {useState} from 'react';

const Advertisement = props => {
     const [visible, toggleVisibility] = useState(true)
    return (
        <div className="advertisement">
            <div>Your Ad Here </div>
        </div>
    )
}

export default Advertisement;