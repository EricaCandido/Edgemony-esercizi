import "./main.css";
import Header from "./components/header/Header";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import ListProducts from "./components/listProducts/ListProducts";
import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Gallery from "./components/gallery/Gallery";

const Main = () => {
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
      <Gallery title="Galleria" />
      <Control listDataLength={productsList.length} />
      <ListProducts listData={productsList} />
      <Footer />
    </div>
  );
};

export default Main;
