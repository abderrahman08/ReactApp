import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CartProgressBar = ({ progress }) => {
  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default CartProgressBar;
