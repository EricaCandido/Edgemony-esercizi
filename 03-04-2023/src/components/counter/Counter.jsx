import "./index.css";
import { useContext } from "react";
import { GlobalContext } from "../../store";

const Counter = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const onHandleClickIncrement = () => dispatch({ type: "increment" });

  const onHandleClickDecrement = () => dispatch({ type: "decrement" });

  //OPPURE

  //   const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      <button onClick={onHandleClickDecrement} className="decrement">
        -
      </button>
      <p className="number">{state.value}</p>
      <button onClick={onHandleClickIncrement} className="increment">
        +
      </button>
    </div>
  );
};

export default Counter;
