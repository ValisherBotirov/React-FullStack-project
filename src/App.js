import { useState } from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const [counter, setCounter] = useState(0);

  const state = useSelector((state) => state);
  console.log(state, "store");

  return (
    <div className="App container">
      <h1>Counter is : {state.count}</h1>
      <Counter />
    </div>
  );
}

export default App;
