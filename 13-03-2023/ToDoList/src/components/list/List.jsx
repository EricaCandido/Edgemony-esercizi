import styles from "./index.module.scss";
import ListItem from "../listItem";
const List = ({ list, setList, rose, orange, green, purple }) => {
  return (
    <div className={styles.List}>
      {list
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <ListItem
            noteText={item}
            list={list}
            setList={setList}
            key={item.id}
            rose={rose}
            orange={orange}
            green={green}
            purple={purple}
          />
        ))}
    </div>
  );
};

export default List;
