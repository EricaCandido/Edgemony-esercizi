import "./main.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import ListProducts from "./components/listProducts/ListProducts";
import Gallery from "./components/gallery/Gallery";
// import Counter from "./components/counter";
import Modal from "./components/modal";
import ImageProduct from "./components/imageProduct";
import Slider from "./components/slider/Slider";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);
  return (
    <div className={`Main ${isDarkMode && "dark-mode"} `}>
      <Header
        title="E-commerce"
        section1="Pro"
        section2="Teams"
        section3="Pricing"
        section4="Documentation"
      />
      <Hero title="Store" />
      {/* <Counter /> */}
      <Gallery title="Galleria" />
      <Slider />
      <ListProducts setSingleProductModal={setSingleProductModal} />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleProductModal ? (
        <ImageProduct
          product={singleProductModal}
          setSingleProductModal={setSingleProductModal}
        />
      ) : null}

      <Footer />
    </div>
  );
};

export default Main;
