import "./index.css";

// import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

const ListItem = ({ noteText }) => {
  return (
    <div className="ListItem">
      <p> {noteText}</p>

      {/* <GrCheckbox />
      <GrCheckboxSelected /> */}
    </div>
  );
};

export default ListItem;
