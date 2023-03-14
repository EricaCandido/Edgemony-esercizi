import "./App.css";
import { useState } from "react";
import List from "./components/list/List";
import ListInput from "./components/listInput/ListInput";
import todos from "./mocks/todo";

function App({}) {
  const [list, setList] = useState(todos);
  return (
    <div className="App">
      <h3>Your Notepad</h3>
      <ListInput setList={setList} />
      <List setList={setList} list={list} />
    </div>
  );
}

export default App;
