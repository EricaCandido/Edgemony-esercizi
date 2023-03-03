import "./index.css";
import CardProduct from "../cardProduct";
import { useState, useEffect } from "react";

const ListProducts = ({ setSingleProductModal }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setListData(data.products));
  }, []);
  return (
    <div className="list-products">
      {listData.map((product) => (
        <CardProduct
          productData={product}
          setSingleProductModal={setSingleProductModal}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ListProducts;
