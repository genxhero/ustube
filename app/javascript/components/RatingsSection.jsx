import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';


const RatingsSection = props => {

    const [rating, setRating] = useState(null)
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
    }

    return (
      <div className="ratings-section">
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
    );
}

export default RatingsSection;