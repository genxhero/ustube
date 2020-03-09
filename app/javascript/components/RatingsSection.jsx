import React, {useState} from 'react';
import StarRating from './star_rating/StarRating';

/**
 * Star rating section for videos, set to TEN for accuracy
 */

const RatingsSection = props => {

    const [rating, setRating] = useState(null)
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
    }

    return (
      <div className="ratings-section">
        <StarRating color="blue" starCount={10} />
      </div>
    );
}

export default RatingsSection;