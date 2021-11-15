import { useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState({
    number1: 0,
    number2: 0,
    operation: "+",
    calculatedValue: 0,
  });

  const { number1, number2, operation, calculatedValue } = state;

  function handleInputChange(e) {
    const { name, value } = e.target;

    const FLOAT_VALUE = !value ? 0 : parseFloat(value);
    let regEx = /^\d+(\.\d+)?$/;
    let testForValidNumber = regEx.test(FLOAT_VALUE);

    switch (name) {
      case "number1":
      case "number2":
        if (testForValidNumber) {
          updateState(name, FLOAT_VALUE);
        } else {
          alert("Enter Only numbers");
        }
        break;

      case "operation":
        updateState(name, value);
        break;

      default:
        break;
    }
  }

  function handleCalculate() {
    switch (operation) {
      case "+":
        let sum = number1 + number2;
        updateState("calculatedValue", sum.toFixed(2));
        break;

      case "-":
        let difference = number1 - number2;
        updateState("calculatedValue", difference.toFixed(2));
        break;

      case "*":
        let product = number1 * number2;
        updateState("calculatedValue", product.toFixed(2));
        break;

      case "/":
        let div = number1 / number2;
        updateState("calculatedValue", div.toFixed(2));
        break;

      default:
        alert("Operation error");
        break;
    }
  }

  function updateState(name, value) {
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div className="add">
      <label>Enter Number </label>
      <input
        type="number"
        name="number1"
        value={number1}
        onChange={handleInputChange}
        placeholder="Enter number"
        required
      />
      <label>Select Operation </label>
      <select name="operation" value={operation} onChange={handleInputChange}>
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Divison (/)</option>
      </select>

      <label>Enter Number </label>
      <input
        type="number"
        name="number2"
        value={number2}
        onChange={handleInputChange}
        placeholder="Enter number"
        required
      />
      <button onClick={handleCalculate}>Calculate</button>
      <label>Result : </label>
      <input type="text" disabled value={calculatedValue} />
    </div>
  );
}

export default App;
