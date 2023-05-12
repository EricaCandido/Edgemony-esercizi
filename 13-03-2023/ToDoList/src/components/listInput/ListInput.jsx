import styles from "./index.module.scss";
import { useState } from "react";
const ListInput = ({ setList }) => {
  const [noteText, setNoteText] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        todo: noteText,
        completed: false,
        userId: Math.floor(Math.random() * 1000),
      },
    ]);
    console.log(noteText);
  };

  return (
    <div>
      <h2 className={styles.general_title}>Notes</h2>
      <form className={styles.ListInput} onSubmit={onHandleSubmit}>
        <input
          onChange={(e) => setNoteText(e.target.value)}
          type="text"
          placeholder="New note"
          value={noteText}
          required
        />
        <input className={styles.uploadBtn} type="submit" value="Post" />
      </form>
    </div>
  );
};

export default ListInput;
