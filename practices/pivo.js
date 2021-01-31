let fivo = function (n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else {
    return fivo(n - 2) + fivo(n - 1);
  }
};

for (let i = 0; i < 10; i++) {
  console.log(fivo(i));
}
