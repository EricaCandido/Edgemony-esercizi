import "./index.css";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import { GET } from "../../utils/http";

const MiniCardList = ({ inputValue }) => {
  const [miniList, setMiniList] = useState([]);

  useEffect(() => {
    GET(`products`).then((data) => setMiniList(data.products));
  }, []);

  return (
    <div className="MiniCardList">
      {inputValue !== ""
        ? miniList
            .filter((minicard) => minicard.category == inputValue)
            .map((minicard) => (
              <MiniCard
                imgSrc={minicard.thumbnail}
                imgAlt={minicard.title}
                key={minicard.id}
              />
            ))
        : miniList.map((minicard) => (
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
