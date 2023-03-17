import { shortDescription } from "../../utils/func";
import "./index.css";

const Card = ({ productData, setModalContext, setCartList, cartList }) => {
  // const onHandleAddCart = (selectedProd) => {
  // if (cartList.filter((product) => product.id !== selectedProd.id)) {
  //   setCartList((prev) => [...prev, productData]);
  // } else {
  //   setCartList((prev) => [...prev]);
  //   alert("Product already added");
  // }
  //     const filtered = cartList.filter(
  //       (product) => product.id !== selectedProd.id
  //     );

  //     setCartList(filtered);
  //     console.log(filtered);
  //   }
  // };

  const onHandleAddCart = (selectedProd) => {
    setCartList((prev) => [...prev, productData]);
  };

  const onHandleCardClick = () => {
    setModalContext(() => ({
      modalVisible: true,
      productData,
    }));
  };
  return (
    <div className="Card">
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 onClick={onHandleCardClick} className="Card__text--title">
          {productData.title}
        </h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        {/*  */}
        <button
          onClick={() => onHandleAddCart(productData)}
          className="Card___btn--add"
        >
          +🛒
        </button>
        <p className="Card__text--cat">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
      </div>
    </div>
  );
};

export default Card;
