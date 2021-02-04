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
