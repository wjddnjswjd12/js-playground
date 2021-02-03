const { log } = console;

//즉시실행 함수에 인수 넘겨보기
(function (a, b) {
  return log(a + b);
})(1, 2);

(function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5);

//함수의 인수 생략

function f(x, y) {
  console.log("x = " + x + ", y =" + y);
}

f(2);
// x = 2, y = undefined

function multiply(a, b) {
  b = b || 1;
  return a * b;
}
multiply(2, 3);
multiply(2);
