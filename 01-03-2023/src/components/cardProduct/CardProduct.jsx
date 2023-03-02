import Button from "../button";
import "./index.css";
import { useState } from "react";

const CardProduct = ({ productData }) => {
  const [modalEvent, setModalEvent] = useState(false);

  const onGetStock = () =>
    alert(`Ci sono ${productData.stock} prodotti disponibili`);

  const onImageClick = () => {
    setModalEvent(prev);
  };

  return (
    <div className="CardProduct">
      <img onClick={onImageClick} src={productData.thumbnail} alt="Apple" />
      <div className="CardProduct__text-content">
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
        <p>{productData.price} $</p>
        <hr />
        <p>{productData.brand}</p>
        <p>Scontato del {productData.discountPercentage}%</p>
        <Button text="Disponibilità" clickFunc={onGetStock} />
      </div>
    </div>
  );
};

export default CardProduct;
