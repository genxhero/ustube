import React, {useState} from 'react';
import StarRating from './star_rating/StarRating';



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