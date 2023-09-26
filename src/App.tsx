import { useState } from "react";
import "./App.css";

// TODOs:
// - increase only with even numbers
// - add a red reset button that set the value back to 0

function App() {
  let [value, setValue] = useState(0);

  const handleIncrement = () => {
    if(value % 2 == 0) {
      setValue(value + 2);
    }
  };

  const handleReset = () => {
    setValue(0);
  }

  return (
      <div className="app">
        <header className="app-header">
          <h1>Counter App:</h1>
          <div className="current-value-container">
            Current Value
            <input type="text" value={value}/>
          </div>
          <button className="increment-button" onClick={handleIncrement}>
            Increment
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </header>
      </div>
  );
}

export default App;
