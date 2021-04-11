import React from 'react';

export const addRating = (value, color) => {
  const getRandomKey = () => Math.floor(Math.random() * 9999);
  const ratingArr = [];
  let isFloat = value % 1 !== 0 ? true : false;

  for (let i = 0; i < value; i++) {
    let num = value - i;

    if (!isFloat) {
      ratingArr.push(
        <i style={{ color }} key={getRandomKey()} className={'fas fa-star'}></i>
      );
    } else {
      num = num - 0.5;
      ratingArr.push(
        <i
          style={{ color }}
          key={getRandomKey()}
          className={'fas fa-star-half-alt'}
        ></i>
      );
    }
    isFloat = false;
  }

  if (ratingArr.length <= 5) {
    for (let i = 0; i <= 5 - ratingArr.length; i++) {
      while (ratingArr.length !== 5) {
        ratingArr.unshift(
          <i
            style={{ color }}
            key={getRandomKey()}
            className={'far fa-star'}
          ></i>
        );
      }
    }
  }

  return ratingArr.length === 5 && ratingArr.reverse();
};
