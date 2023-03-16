import Card from "../card/Card";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";
import "./index.css";

const CardList = ({ title, productsList, setModalContext }) => {
  return (
    <div className="CardList">
      <h2 className="CardList__title">{title}</h2>
      <div className="CardList__list">
        {productsList.length ? (
          productsList.map((product) => (
            <Card
              productData={product}
              key={product.id}
              setModalContext={setModalContext}
            />
          ))
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default CardList;
