import "./index.css";
import Button from "../button";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <h3>Salve, accetta i cookies?</h3>
        <Button text="No" clickFunc={() => {}} />
        <Button text="Si" clickFunc={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default Modal;
