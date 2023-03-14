import "./index.css";
import ListItem from "../listItem";
const List = ({ list, setList }) => {
  return (
    <div className="List">
      {list
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <ListItem
            noteText={item}
            list={list}
            setList={setList}
            key={item.id}
          />
        ))}
    </div>
  );
};

export default List;
