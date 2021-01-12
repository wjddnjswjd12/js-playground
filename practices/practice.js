const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input = line.split(" ");
  console.log("hello !", input[0]);
  console.log("nice !", input[1]);

  rl.close();
}).on("close", function () {
  process.exit();
});
