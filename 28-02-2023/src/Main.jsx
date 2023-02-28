import "./main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Main = () => {
  return (
    <div className="Main">
      <Header
        //avanzato
        title="Mynpm"
        section1="Pro"
        section2="Teams"
        section3="Pricing"
        section4="Documentation"
      />
      <Footer />
    </div>
  );
};

export default Main;
