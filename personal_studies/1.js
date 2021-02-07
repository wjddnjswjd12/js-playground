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
multiply(2, 3); // 6
multiply(2); // 2

// 참고로 ||연산자는 왼쪽 피연산자가 true로 평가되면 왼쪽 피연산자 반환, false로 평가되면 오른쪽 피연산자 반환
//약간.. b?b:1 같은 느낌?..인가...
