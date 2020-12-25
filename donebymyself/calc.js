var input = { array: [] };

var clickNumb = function (event) {
  var str = event.target.innerHTML;
  if (str === "+" || str === "-" || str === "*" || str === "/") {
    input.array.push(" " + str + " ");
  } else {
    input.array.push(str);
  }
  if (str.length === 0) {
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
