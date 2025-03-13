const themeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    themeToggle.style.backgroundColor = "#333";
  } else {
    themeToggle.style.backgroundColor = "#fdff95";
  }
  document.body.classList.toggle("dark");
  calculator.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, rgb(223, 255, 163), rgb(149, 218, 255))";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, rgb(118, 67, 8), rgb(110, 36, 89))";
  }
});

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-number, .btn-operator");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.textContent;
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput) {
        firstOperand = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      }
    } else {
      currentInput += value;
    }
    display.textContent = currentInput;
  });
});

equalButton.addEventListener("click", () => {
  if (firstOperand !== null && operator && currentInput) {
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }
    display.textContent = result;
    currentInput = "";
    operator = "";
    firstOperand = null;
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  operator = "";
  firstOperand = null;
  display.textContent = "0";
});
