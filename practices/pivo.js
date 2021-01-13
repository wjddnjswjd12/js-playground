let pivo = function (n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else {
    return pivo(n - 2) + pivo(n - 1);
  }
};

for (let i = 0; i < 10; i++) {
  console.log(pivo(i));
}
