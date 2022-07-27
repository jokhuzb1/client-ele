import React from 'react'
import classes from './SingleProduct.module.css'
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;