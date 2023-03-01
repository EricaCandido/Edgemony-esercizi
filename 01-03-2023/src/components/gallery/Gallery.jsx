import "./index.css";
import { images } from "./images";

const Gallery = ({ title }) => {
  return (
    <div className="Gallery">
      <h2>{title}</h2>
      <div className="gallery-img-wrapper">
        <img src={images[0]} alt="gallery-img" />
        <img src={images[1]} alt="gallery-img" />
        <img src={images[2]} alt="gallery-img" />
        <img src={images[3]} alt="gallery-img" />
      </div>
    </div>
  );
};

export default Gallery;
