import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCardList from "./components/miniCardList";
import Navbar from "./components/navbar";
import ProductDetail from "./components/productDetail";
import CartModal from "./components/cartModal";
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

  const [cartModalVisibility, setCartModalVisibility] = useState(false);
  // JSON.parse(localStorage.getItem("cartList")) || []
  const [cartList, setCartList] = useState([]);

  // const localStorageCartList =
  //   window !== "undefined" &&
  //   JSON.parse(localStorage.getItem("cartList") || "[]").length;

  useEffect(() => {
    GET("products").then((data) => {
      setAllProducts(data.products);
    });
  }, []);

  return (
    <div className="App">
      <Navbar
        setInputValue={setInputValue}
        setCartModalVisibility={setCartModalVisibility}
        cartListLength={cartList.length}
      />
      <Hero />
      <MiniCardList inputValue={inputValue} productsList={allProducts} />
      <CardList
        title="Technology"
        productsList={allProducts.slice(0, 10)}
        setModalContext={setModalContext}
        setCartList={setCartList}
        cartList={cartList}
      />
      <CardList
        title="Skincare"
        productsList={allProducts.slice(10, 20)}
        setModalContext={setModalContext}
        setCartList={setCartList}
        cartList={cartList}
      />

      {modalContext.modalVisible && (
        <ProductDetail
          productData={modalContext.productData}
          setCartList={setCartList}
          setModalContext={setModalContext}
        />
      )}

      {cartModalVisibility && (
        <CartModal cartList={cartList} setCartList={setCartList} />
      )}

      <Footer />
    </div>
  );
}

export default App;
