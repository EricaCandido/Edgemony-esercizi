import "./index.css";
// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";

const CartModal = ({ cartModalContext }) => {
  return (
    <div
      className={`CartModal ${cartModalContext.modalVisible && "cart-visible"}`}
    >
      CARRELLO
      {<h3>{cartModalContext.productData.title} </h3>}
      {<p>{cartModalContext.productData.price} </p>}
    </div>
  );
};

export default CartModal;
