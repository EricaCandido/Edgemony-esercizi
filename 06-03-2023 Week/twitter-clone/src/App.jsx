import { useState } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import SideTrends from "./components/sideTrends/SideTrends";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
      <Footer />
    </div>
  );
}

export default App;
