import React from 'react';
import { addRating } from './addRating.js';
import PropTypes from 'prop-types';

export const Rating = ({ value, text = '', color }) => {
  const ratingArr = addRating(value, color);

  return (
    <div className='rating'>
      <span>{ratingArr && ratingArr.map((rating) => rating)}</span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: 'rgb(248, 56, 48)',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
