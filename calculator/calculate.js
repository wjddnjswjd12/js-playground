function calculate() {
  var nums = document.getElementById("input1");
  var n1 = nums.value;
  console.log(n1);
  console.log(n1.split(""));
}

function main() {
  console.log("Cacl1");
  var out = document.getElementById("output");
  out.innerHTML = "계산기 구현하기";
  console.log(10 + 3);
  console.log(10 * 3);
  console.log(10 / 3);
  console.log(10 - 3);
}
main();
