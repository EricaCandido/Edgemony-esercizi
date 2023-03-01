// import "./index.css";

// const CardProduct = ({ productData }) => {
//   <div className="card-product">
//     <img src={productData.thumbnail} alt={productData.title} />
//     <h3>{productData.title}</h3>
//     <p>{productData.description}</p>
//     <h4>{productData.price}</h4>
//     <p>{productData.brand}</p>
//     <p>Scontato del {productData.discountPercentage}%</p>
//   </div>;
// };

// export default CardProduct;

import Button from "../button";
import "./index.css";

const CardProduct = ({ productData }) => {
  const onGetStock = () =>
    alert(`Ci sono ${productData.stock} prodotti disponibili`);

  const onImageClick = () => window.open(productData.images[0], "_self");

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
