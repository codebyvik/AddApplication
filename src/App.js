import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    number1: 0,
    number2: 0,
    operation: "+",
    sum: 0,
  });

  const { number1, number2, operation, sum } = state;

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "number1":
      case "number2":
        setState({
          ...state,
          [name]: parseInt(value),
        });
        break;

      case "operation":
        setState({
          ...state,
          [name]: value || "",
        });
        break;

      default:
        break;
    }
  }

  function calculateSum() {
    switch (operation) {
      case "+":
        setState({ ...state, sum: number1 + number2 });
        break;

      case "-":
        setState({ ...state, sum: number1 - number2 });
        break;

      default:
        alert("Enter only '+' or '-' in operation field");
        break;
    }
  }

  return (
    <div className="add">
      <label>Enter Operation </label>
      <input
        type="text"
        name="operation"
        value={operation}
        onChange={handleInputChange}
      />
      <label>Enter Number </label>
      <input
        type="number"
        name="number1"
        value={number1}
        onChange={handleInputChange}
        required
      />
      <label>Enter Number </label>
      <input
        type="number"
        name="number2"
        value={number2}
        onChange={handleInputChange}
        required
      />
      <button onClick={calculateSum}>Calculate </button>
      <label>Result : </label>
      <input type="number" disabled value={sum} />
    </div>
  );
}

export default App;
