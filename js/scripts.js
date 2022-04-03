function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

const userNum1 = parseInt(prompt("Enter a number"));
const userNum2 = parseInt(prompt("Enter another number"));

alert(divide(userNum1, userNum2));