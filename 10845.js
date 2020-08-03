/* 2020-08-03 Mon
09m41s */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);

const MX = 10000 + 5;
const queue = new Array(MX).fill(0);
let head = 0;
let tail = 0;

for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	switch (op) {
		case "push":
			queue[tail++] = val;
			break;
		case "pop":
			if (head === tail) console.log(-1);
			else console.log(queue[head++]);
			break;
		case "size":
			console.log(tail - head);
			break;
		case "empty":
			if (tail - head === 0) console.log(1);
			else console.log(0);
			break;
		case "front":
			if (tail - head === 0) console.log(-1);
			else console.log(queue[head]);
			break;
		case "back":
			if (tail - head === 0) console.log(-1);
			else console.log(queue[tail - 1]);
			break;
	}
}
