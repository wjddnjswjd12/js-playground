const promise1 = function (param) {
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve("바보");
    } else {
      reject("아닌데");
    }
  });
};

promise1(true).then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  }
);
