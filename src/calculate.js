function calculateSum(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    default:
      alert("Enter only '+' or '-' in operation field");
      break;
  }
}

module.exports = calculateSum;
