let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const product = (A * B * C).toString();
const arr = new Array(10).fill(0);

for (let i = 0; i < product.length; i++) {
	let j = product.charCodeAt(i) - "0".charCodeAt(0);
	arr[j]++;
}
arr.forEach((v) => console.log(v));
