import React from 'react';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';
import PropTypes from 'prop-types';

/**
 * This is a star. When clicked on, it is full.  When it is unclicked or a previous star is clicked, it is clear.
 * Half stars are included but may not be necessary. 
 * 
 * @param {*} props 
 */

const Star = props => {

    Star.propTypes = {
        name: PropTypes.string,
        color: PropTypes.string
    }

    const STAR_ICONS = {
        full: <MdStar />,
        half: <MdStarHalf />,
        blank: <MdStarBorder />
    };

    return (
        <div className="star" name={props.name} style={{ "color": props.color }} onClick={props.onClick}>
            {STAR_ICONS[props.starType]}
        </div>
    )
}

Star.defaultProps = {
    starType: "blank",
    name: "1"
}

export default Star;