import "./App.css";
import { useState } from "react";
import List from "./components/list/List";
import ListInput from "./components/listInput/ListInput";
import todos from "./mocks/todo";
import Header from "./components/header/Header";

function App({}) {
  const [list, setList] = useState(todos);
  const [background, setBackground] = useState(false);
  const [rose, setRose] = useState(true);
  const [orange, setOrange] = useState(false);
  const [green, setGreen] = useState(false);
  const [purple, setPurple] = useState(false);

  return (
    <div className={`App ${background && "dark"}`}>
      <Header
        setBackground={setBackground}
        setRose={setRose}
        setOrange={setOrange}
        setGreen={setGreen}
        setPurple={setPurple}
        rose={rose}
        orange={orange}
        green={green}
        purple={purple}
      />
      <h3>Your Notepad</h3>
      <ListInput background={background} setList={setList} />
      <List
        setList={setList}
        list={list}
        rose={rose}
        orange={orange}
        green={green}
        purple={purple}
      />
    </div>
  );
}

export default App;
