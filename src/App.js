import { useState } from "react";
import calculateSum from "./calculate";
import "./App.css";
import calculate from "./calculateClass";

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

  const handleCalculate = () => {
    // const calculatedValue = calculateSum(number1, number2, operation);
    // setState({ ...state, sum: calculatedValue });

    // calculate implemented using class (Public)
    // const calculatedValue = new calculate(
    //   number1,
    //   number2,
    //   operation
    // ).returnSum();
    // setState({ ...state, sum: calculatedValue });

    // calculate implemented using class (Private)
    const calculatedValue = new calculate(
      number1,
      number2,
      operation
    ).returnProductAndSum();

    setState({
      ...state,
      sum: calculatedValue.sum,
    });

    console.log("product", calculatedValue.product);
  };

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
      <button onClick={handleCalculate}>Calculate</button>
      <label>Result : </label>
      <input type="number" disabled value={sum} />
    </div>
  );
}

export default App;
