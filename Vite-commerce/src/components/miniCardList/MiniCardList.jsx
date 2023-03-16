import "./index.css";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import { GET } from "../../utils/http";

const MiniCardList = ({ inputValue, productsList }) => {
  // const [miniList, setMiniList] = useState([]);

  // useEffect(() => {
  //   GET(`products`).then((data) => setMiniList(data.products));
  // }, []);

  return (
    <div className="MiniCardList">
      {inputValue !== ""
        ? // ? miniList
          productsList
            .filter((minicard) => minicard.category == inputValue)
            .map((minicard) => (
              <MiniCard
                imgSrc={minicard.thumbnail}
                imgAlt={minicard.title}
                key={minicard.id}
              />
            ))
        : // : miniList.map((minicard) => (
          productsList.map((minicard) => (
            <MiniCard
              imgSrc={minicard.thumbnail}
              imgAlt={minicard.title}
              key={minicard.id}
            />
          ))}
    </div>
  );
};

export default MiniCardList;
