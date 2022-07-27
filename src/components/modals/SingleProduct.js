import React, { Fragment } from "react";
import ReactDom from "react-dom";
import ModalOverlay from "./ModalOverlay";
import classes from "./SingleProduct.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={() => props.setShowModal(false)}></div>;
};

const modalPlaceholder = document.getElementById('modal-root');
const SingleProductModal = ({ setShowModal, item, children }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop setShowModal={setShowModal} />, modalPlaceholder)}
      {ReactDom.createPortal(<ModalOverlay item={item}>{children}</ModalOverlay>, modalPlaceholder)}
      <div className={classes.note}>
        <h2>Mobile version is under construction</h2>
      </div>
    </Fragment>
  );
};

export default SingleProductModal;