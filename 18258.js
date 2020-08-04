/* 2020-08-04 Tue 21:26
14m31s >> 통과 */
let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);
const MX = 500000 + 5;
const q = [];
let head = 0;
let tail = 0;

let answer = "";
for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	const op = line[0];
	const val = Number(line[1]);

	if (op === "push") {
		q[tail++] = val;
	} else if (op === "pop") {
		if (tail - head === 0) answer += "-1\n";
		else answer += q[head++] + "\n";
	} else if (op === "size") {
		answer += String(tail - head) + "\n";
	} else if (op === "empty") {
		if (tail - head === 0) answer += "1\n";
		else answer += "0\n";
	} else if (op === "front") {
		if (tail - head === 0) answer += "-1\n";
		else answer += q[head] + "\n";
	} else if (op === "back") {
		if (tail - head === 0) answer += "-1\n";
		else answer += q[tail - 1] + "\n";
	}
}
console.log(answer);
