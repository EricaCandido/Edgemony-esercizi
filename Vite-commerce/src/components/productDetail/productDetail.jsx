import { useState } from "react";
import "./index.css";

const GalleryModal = ({ imgUrl, imgAlt, setGalleryVisible }) => {
  return (
    <img onClick={() => setGalleryVisible(false)} src={imgUrl} alt={imgAlt} />
  );
};

const ProductDetail = ({ productData, setModalContext, setCartList }) => {
  const [isGalleryVisible, setGalleryVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const onHandleClose = () => {
    setModalContext((prev) => ({
      ...prev,
      modalVisible: false,
    }));
  };

  const onHandleImageClick = (imgUrl) => {
    setGalleryVisible(true);
    setSelectedPhoto(() => imgUrl);
  };

  return (
    <div className="ProductDetail">
      {isGalleryVisible ? (
        <GalleryModal
          imgUrl={selectedPhoto}
          imgAlt={selectedPhoto}
          setGalleryVisible={setGalleryVisible}
        />
      ) : (
        <div className="ProductDetail__content">
          <div className="ProductDetail__text">
            <h1>{productData.title}</h1>
            <p>{productData.description}</p>
            <div className="ProductDetail__text--info">
              <span>{productData.category}</span>
              <span>{productData.price}</span>
            </div>
          </div>
          <div className="ProductDetail__gallery">
            {productData.images.map((image) => (
              <img
                onClick={() => onHandleImageClick(image)}
                src={image}
                alt={image}
                key={image}
              />
            ))}
          </div>

          <button onClick={onHandleClose} className="ProductDetail--close">
            Chiudi
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
