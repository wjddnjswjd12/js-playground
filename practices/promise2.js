const param = true;
const promise1 = new Promise(function (resolve, reject) {
  if (param) {
    resolve("바보");
  } else {
    reject("아닌데");
  }
});
const promise2 = new Promise(function (resolve, reject) {
  if (param) {
    resolve("바보2");
  } else {
    reject("아닌데2");
  }
});
Promise.all([promise1, promise2]).then(function (values) {
  console.log("1,2,3 모두완료", values);
});
