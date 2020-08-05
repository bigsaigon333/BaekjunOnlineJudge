/* Date: 2020-08-05 Wed 17:40
1st try: 11m 08s
comment: 머리 식힐겸 기초문제 풀어봄.. */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, X] = input[0].split(" ").map((v) => Number(v));
// console.log(N, X);

let answer = input[1]
	.split(" ")
	.filter((v) => v < X)
	.reduce((acc, curr) => (acc += curr + " "), "");

console.log(answer);
