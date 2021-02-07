function Encryptor() {
  var obj = {};
  return obj;
}

const numOfAlphabet = 26;
const extraCharactors = [
  " ",
  ".",
  "?",
  "!",
  "%",
  "#",
  "'",
  "&",
  "$",
  ":",
  ".",
  "/",
];

obj.chars = [];
for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
  obj.chars.push(String.fromCharCode(c));
}

for (let c = "A".charCodeAt(0); c <= "Z".charCodeAt(0); c++) {
  obj.chars.push(String.fromCharCode(c));
}

for (let d = 0; d <= 9; d++) {
  obj.chars.push(d.toString());
}

for (var j = 0; j < extraCharactors.length; j++) {
  obj.chars.push(extraCharactors[j]);
}

console.log(obj.chars);
