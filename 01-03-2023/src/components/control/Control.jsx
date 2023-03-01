import Button from "../button";
import "./index.css";

const Control = ({ listDataLength }) => {
  const getProductsNum = () =>
    alert(`Il numero di prodotti corrisponde a: ${listDataLength}`);

  return (
    <div className="Control">
      <Button
        text="Totale numero di prodotti"
        clickFunc={getProductsNum}
        isDisabled={false}
      />
    </div>
  );
};

export default Control;
