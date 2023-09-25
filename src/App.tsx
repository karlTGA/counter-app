import { useState } from "react";
import "./App.css";

function App() {
  let [value] = useState(0);

  // 1. Fix the bug that the value doesn't change
  const handleIncrement = () => {
    value += value;
  };

  // 2. add and use a function that increment only with even numbers. type the function in- and output correct.

  return (
    <div className="app">
      <header className="app-header">
        <h1>Counter App:</h1>
        <div className="current-value-container">
          Current Value
          <input disabled type="text" value={value} />
        </div>

        <button className="increment-button" onClick={handleIncrement}>
          Increment
        </button>

        {/* 3. Optional: Add a red reset button with an confirm dialog */}
      </header>
    </div>
  );
}

export default App;
