import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCardList from "./components/miniCardList";
import Navbar from "./components/navbar";
import ProductDetail from "./components/productDetail";
import { useState, useEffect } from "react";
import { GET } from "./utils/http";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [modalContext, setModalContext] = useState({
    productData: {},
    modalVisible: false,
  });

  // const [cartModalContext, setCartModalContext] = useState({
  //   productData: {},
  //   modalVisible: false,
  // });
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    GET("products").then((data) => {
      setAllProducts(data.products);
    });
  }, []);

  return (
    <div className="App">
      <Navbar setInputValue={setInputValue} setModalContext={setModalContext} />
      <Hero />
      <MiniCardList inputValue={inputValue} productsList={allProducts} />
      <CardList
        title="Technology"
        productsList={allProducts.slice(0, 10)}
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        productsList={allProducts.slice(10, 20)}
        setModalContext={setModalContext}
      />

      {modalContext.modalVisible && (
        <ProductDetail
          productData={modalContext.productData}
          setCartList={setCartList}
          setModalContext={setModalContext}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
