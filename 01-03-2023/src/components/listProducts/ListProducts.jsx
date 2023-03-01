import "./index.css";
import CardProduct from "../cardProduct";

const ListProducts = ({ listData }) => {
  return (
    <div className="list-products">
      {listData.map((product) => (
        <CardProduct productData={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListProducts;
