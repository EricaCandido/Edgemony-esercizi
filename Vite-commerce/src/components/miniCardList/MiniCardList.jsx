import "./index.css";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import { GET } from "../../utils/http";

const MiniCardList = ({ inputValue, productsList }) => {
  return (
    <div className="MiniCardList">
      {inputValue !== ""
        ? productsList
            .filter((minicard) => minicard.category == inputValue)
            .map((minicard) => (
              <MiniCard
                imgSrc={minicard.thumbnail}
                imgAlt={minicard.title}
                key={minicard.id}
              />
            ))
        : productsList.map((minicard) => (
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
