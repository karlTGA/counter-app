import { useState } from "react";
import "./App.css";

// TODOs:
// - increase only with even numbers
// - add a red reset button that set the value back to 0

function App() {
  let [value] = useState(0;

  const handleIncrement = () => {
    value += value;
  };

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
      </header>
    </div>
  );
}

export default App;
