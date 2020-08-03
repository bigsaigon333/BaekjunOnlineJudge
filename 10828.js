/* 2020-08-03 Mon 09:30
'12m00s' */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const MX = 10000 + 5;
const stack = new Array(MX).fill(0);
let pos = 0;

for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	if (op === "push") {
		stack[pos++] = val;
	} else if (op === "pop") {
		if (pos === 0) console.log(-1);
		else console.log(stack[--pos]);
	} else if (op === "size") {
		console.log(Math.max(0, pos));
	} else if (op === "empty") {
		if (pos === 0) console.log(1);
		else console.log(0);
	} else if (op === "top") {
		if (pos === 0) console.log(-1);
		else console.log(stack[pos - 1]);
	}
}
