import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter((state) => state + 1);
  }

  function reset() {
    setCounter(0);
  }

  function remove() {
    setCounter((state) => state - 1);
  }
  return (
    <div className="App container">
      <h1>Counter is : {counter}</h1>
      <Counter add={add} reset={reset} remove={remove} />
    </div>
  );
}

export default App;
