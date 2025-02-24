function addition(...args) {
  let [num1, operator, num2] = args;
  num1 = Number(num1);
  num2 = Number(num2);

  return num1 + num2;
}

function subtraction(...args) {
  let [num1, operator, num2] = args;
  num1 = Number(num1);
  num2 = Number(num2);

  return num1 - num2;
}

function multiplication(...args) {
  let [num1, operator, num2] = args;
  num1 = Number(num1);
  num2 = Number(num2);

  return num1 * num2;
}

function division(...args) {
  let [num1, operator, num2] = args;
  num1 = Number(num1);
  num2 = Number(num2);

  return num1 / num2;
}
