import { useReducer } from "react";
import { GlobalContext, globalStateInit } from "./store";
import { globalReducer } from "./store/reducer";
import "./App.css";
import Counter from "./components/counter/Counter";

function App() {
  const [state, dispatch] = useReducer(globalReducer, globalStateInit);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Counter />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
