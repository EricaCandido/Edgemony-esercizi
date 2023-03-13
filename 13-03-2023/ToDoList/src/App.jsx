import "./App.css";
import List from "./components/list/List";
import ListInput from "./components/listInput/ListInput";

function App({ noteText }) {
  return (
    <div className="App">
      <List noteText={noteText} />
      <ListInput />
    </div>
  );
}

export default App;
