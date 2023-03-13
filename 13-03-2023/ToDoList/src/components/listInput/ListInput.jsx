import "./index.css";
import { useState } from "react";
const ListInput = () => {
  const [noteText, setNoteText] = useState("");

  const onHandleSubmit = () => {
    console.log(noteText);
  };

  return (
    <div className="ListInput">
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={(e) => setNoteText(e.target.value)}
          type="text"
          placeholder="Your note"
          value={noteText}
        />
        <input className="uploadBtn" type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default ListInput;
