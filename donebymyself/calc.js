var input = { array: [] };

input.prepCalc = function () {
  return this.array.join("").split(" ");
};

input.isEmpty = function () {
  return this.array.length === 0;
};

input.removeAll = function (str) {
  this.array = [];
  this.array.push(str);
};

var clickNumb = function (event) {
  var str = event.target.innerHTML;
  if (str === "BS") {
    input.array.pop();
  } else if (str === "+" || str === "-" || str === "*" || str === "/") {
    input.array.push(" " + str + " ");
  } else {
    input.array.push(str);
  }
  if (input.array.length === 0) {
    output.text.innerHTML = "empty";
  } else {
    output.display();
  }
};

var output = {};
output.text = document.getElementById("output");

output.display = function () {
  output.text.innerHTML = input.array.join("");
};

output.print = function (str) {
  output.text.innerHTML = str;
};

var calculator = {};
var showResult = function () {
  input.array = input.prepCalc();
  console.log(input.array);
  var result = Number(input.array.shift());
  while (!input.isEmpty()) {
    var eq = input.array.shift();
    var second = Number(input.array.shift());
    result = calculator.calculate(result, second, eq);
  }
  output.print(result);
  input.removeAll(result);
};

calculator.calculate = function (first, second, eq) {
  var result;
  if (eq === "+") {
    result = first + second;
  } else if (eq === "-") {
    result = first - second;
  } else if (eq === "*") {
    result = first * second;
  } else if (eq === "/") {
    result = first / second;
  }
  return result;
};
