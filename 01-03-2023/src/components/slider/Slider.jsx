import { useState } from "react";
import "./index.css";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1677618031630-768ddc4f4fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  const [actualImage, setActualImage] = useState(0);
  return (
    <div className="Slider">
      <img className="slider-img" src={images[actualImage]} alt="immagine" />
      <div className="img-buttons">
        <button
          className="back-img-btn"
          onClick={() => {
            if (actualImage === 0) {
              setActualImage(2);
            } else {
              setActualImage(actualImage - 1);
            }
          }}
        >
          {"<"}
        </button>

        <button
          className="next-img-btn"
          onClick={() => {
            if (actualImage === 2) {
              setActualImage(0);
            } else {
              setActualImage(actualImage + 1);
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
