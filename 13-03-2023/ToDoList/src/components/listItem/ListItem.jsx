import "./index.css";
import { useState } from "react";

import { BsFillCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const ListItem = ({ list, setList, noteText, rose, orange, green, purple }) => {
  const [visualize, setVisualize] = useState(false);

  const onHandleCheckbox = () => {
    setVisualize(!visualize);
    console.log(visualize);
  };
  const onHandleRemove = (iden) => {
    setList(list.filter((it) => it.id !== iden));
  };

  return (
    <div
      className={`ListItem ${rose && "_1"} ${orange && "_2"} ${green && "_3"} ${
        purple && "_4"
      }`}
    >
      <p>
        {" "}
        {`${
          noteText.todo.length > 60 ? noteText.todo.slice(0, 60) : noteText.todo
        }`}
      </p>
      <button onClick={() => onHandleRemove(noteText.id)}>
        <MdClose />
      </button>

      <BsFillCircleFill
        onClick={onHandleCheckbox}
        className={`Checkbox ${visualize && "fill"}`}
      />
      <p className="listItem__date">{`${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`}</p>
    </div>
  );
};

export default ListItem;
