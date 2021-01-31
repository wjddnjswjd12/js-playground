try {
  setTimeout(() => {
    throw "Error!";
  }, 1000);
} catch (e) {
  console.log("에러를 캐치하지 못함");
  console.log(e);
}

// 진짜 throw "Error!" 이거만 실행되네...
//try catch에서는 비동기함수의 콜백메서드에서 에러를 만들지만 catch 못함..
//setTimeout 함수의 콜백은 이벤트 큐에 있다가 콜스택이 비어지면 실행되기 때문..
//고로 콜백메서드의 중첩은 에러처리가 힘들다.
