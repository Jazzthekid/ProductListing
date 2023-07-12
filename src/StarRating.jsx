import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="lightgray" />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
