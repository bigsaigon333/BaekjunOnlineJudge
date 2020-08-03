/* 2020-08-03 Mon 09:44
10m21s */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);

const MX = 10000;
const deque = new Array(2 * MX + 5).fill(0);
let head = MX;
let tail = MX;

for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	if (op === "push_front") {
		deque[--head] = val;
	} else if (op === "push_back") {
		deque[tail++] = val;
	} else if (op === "pop_front") {
		if (tail - head === 0) console.log(-1);
		else console.log(deque[head++]);
	} else if (op === "pop_back") {
		if (tail - head === 0) console.log(-1);
		else console.log(deque[--tail]);
	} else if (op === "size") {
		console.log(tail - head);
	} else if (op === "empty") {
		console.log(tail - head === 0 ? 1 : 0);
	} else if (op === "front") {
		if (tail - head === 0) console.log(-1);
		else console.log(deque[head]);
	} else if (op === "back") {
		if (tail - head === 0) console.log(-1);
		else console.log(deque[tail - 1]);
	}
}
