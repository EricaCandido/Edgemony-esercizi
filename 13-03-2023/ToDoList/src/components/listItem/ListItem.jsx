import "./index.css";
import { useState } from "react";

import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";

const ListItem = ({ list, setList, noteText }) => {
  const [visualize, setVisualize] = useState(false);

  const onHandleCheckbox = () => {
    setVisualize(!visualize);
    console.log(visualize);
  };
  const onHandleRemove = (iden) => {
    setList(list.filter((it) => it.id !== iden));
  };

  return (
    <div className="ListItem">
      <p> {noteText.todo}</p>
      <button onClick={() => onHandleRemove(noteText.id)}> X</button>

      <BsCircle
        onClick={onHandleCheckbox}
        className={`Checkbox ${visualize && "fill"}`}
      />
      {/* {  <BsFillCheckCircleFill />} */}
    </div>
  );
};

export default ListItem;
