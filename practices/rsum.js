let rsum = function (a, b) {
  if (a == b) {
    return a;
  }
  return b + rsum(a, b - 1);
};

console.log(rsum(1, 1));
console.log(rsum(0, 5));
