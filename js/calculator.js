let display = document.querySelector(".calcDisplay");
let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  display.textContent = "";
});

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operatorButton");

let decimal = document.querySelector("#decimal");

decimal.addEventListener("click", () => {
  display.textContent += ".";
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.textContent += number.textContent;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    display.textContent += operator.textContent;
  });
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});
