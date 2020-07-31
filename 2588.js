let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let A = Number(input[0]);
let B = Number(input[1]);

console.log(A * (B % 10));
console.log(A * (Math.floor(B / 10) % 10));
console.log(A * (Math.floor(B / 100) % 10));
console.log(A * B);
