/* 2020-08-03 Mon 09:44
1st try: 10m21s >> 시간초과
20208-08-04 Tue 20:56
2nd try: 4m53s >> 통과. 출력처리 수정.
*/

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const N = Number(input[0]);

const MX = 10000;
const deque = new Array(2 * MX + 5).fill(0);
let head = MX;
let tail = MX;

let answer = "";
for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	if (op === "push_front") {
		deque[--head] = val;
	} else if (op === "push_back") {
		deque[tail++] = val;
	} else if (op === "pop_front") {
		if (tail - head === 0) answer += "-1\n";
		else answer += deque[head++] + "\n";
	} else if (op === "pop_back") {
		if (tail - head === 0) answer += "-1\n";
		else answer += deque[--tail] + "\n";
	} else if (op === "size") {
		answer += tail - head + "\n";
	} else if (op === "empty") {
		answer += (tail - head === 0 ? 1 : 0) + "\n";
	} else if (op === "front") {
		if (tail - head === 0) answer += "-1\n";
		else answer += deque[head] + "\n";
	} else if (op === "back") {
		if (tail - head === 0) answer += "-1\n";
		else answer += deque[tail - 1] + "\n";
	}
}
console.log(answer);
