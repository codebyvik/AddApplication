class calculate {
  number1;
  number2;
  operation;
  product;

  constructor(num1, num2, operation) {
    this.number1 = num1;
    this.number2 = num2;
    this.operation = operation;
    this.product = num1 * num2;
  }

  returnSum() {
    switch (this.operation) {
      case "+":
        return this.number1 + this.number2;

      case "-":
        return this.number1 - this.number2;

      default:
        alert("Enter only '+' or '-' in operation field");
        break;
    }
  }

  returnProductAndSum(state, setState) {
    return {
      sum: this.returnSum(),
      product: this.product,
    };
  }
}

module.exports = calculate;
