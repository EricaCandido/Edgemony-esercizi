import "./index.css";

import { BsTrash } from "react-icons/bs";

const CartModal = ({ cartList, setCartList }) => {
  const onHandleProdRemove = (selectedProdId) => {
    setCartList(cartList.filter((product) => product.id !== selectedProdId.id));
  };

  return (
    <div className="CartModal">
      <h2 className="Cart_general-title">Your cart</h2>
      <img
        className="Cart_img"
        src="https://img.freepik.com/free-icon/shopping-online_318-877427.jpg?size=338&ext=jpg&ga=GA1.1.904041858.1678804308&semt=sph"
        alt="cart-img"
      />
      {cartList.length !== 0 ? (
        cartList.map((product) => (
          <div className="Cart" key={product.id}>
            <img
              className="Cart_product-img"
              src={product.thumbnail}
              alt={product.title}
            />
            <h3 className="Cart_title">{product.title.slice(0, 10)}..</h3>
            <p className="Cart_price">{product.price}$</p>
            <BsTrash
              onClick={() => onHandleProdRemove(product)}
              className="Cart_trash"
            />
          </div>
        ))
      ) : (
        <p className="Cart_empty">It's empty here! </p>
      )}
    </div>
  );
};

export default CartModal;
