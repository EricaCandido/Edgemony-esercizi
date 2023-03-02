import "./main.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import ListProducts from "./components/listProducts/ListProducts";
import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Gallery from "./components/gallery/Gallery";
import Counter from "./components/counter";
import Modal from "./components/modal";
import ImageProduct from "./components/imagePproduct";

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(false);
  return (
    <div className="Main">
      <Header
        title="E-commerce"
        section1="Pro"
        section2="Teams"
        section3="Pricing"
        section4="Documentation"
      />
      <Hero title="Store" />
      <Counter />
      <Gallery title="Galleria" />
      <Control listDataLength={productsList.length} />
      <ListProducts listData={productsList} />
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {condition ? <ImageProduct /> : null}
      <Footer />
    </div>
  );
};

export default Main;
