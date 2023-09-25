import { useState } from "react";
import "./App.css";

function App() {
  let [value] = useState(0);

  // 1. Fix the bug in the function
  const handleIncrement = () => {
    value += value;
  };

  // 2. Make it possible to set a manual value
  // (optional: what is the correct type of event variable)
  // @ts-expect-error
  const handleInputChange = (event) => {};

  return (
    <div className="app">
      <header className="app-header">
        <h1>Counter App:</h1>
        <div className="current-value-container">
          Current Value
          <input
            disabled
            type="text"
            value={value}
            onChange={handleInputChange}
          />
        </div>

        <button className="increment-button" onClick={handleIncrement}>
          Increment
        </button>

        {/* 3. Add a red reset button with an confirm dialog */}
      </header>
    </div>
  );
}

export default App;
