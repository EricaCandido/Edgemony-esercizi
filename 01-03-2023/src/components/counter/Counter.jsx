import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <p>Hai incrementato {count} volte</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Incrementa
      </button>
    </div>
  );
};

export default Counter;
