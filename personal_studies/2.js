function myConcat(separator) {
  var s = "";
  for (var i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}
console.log(myConcat("/", "apple", "orange", "peach"));

// 가변길이 인수목록 ARguments 객체
// Arguments 객체는 유사 배열 객체다.

var fact = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};

//arguments.callee는 이름이 없는 익명함수도 재귀호출할수있다.
//왜냐하면 지금 실행중인 함수를 가리키기 때문이다.