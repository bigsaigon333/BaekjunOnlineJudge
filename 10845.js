/* 2020-08-03 Mon
1st try 09m41s >> 시간초과
2nd try 06m00s >> 출력을 answer에 모아서 마지막에 한번만 하도록 수정하여 통과함
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const N = Number(input[0]);

const MX = 10000 + 5;
const queue = new Array(MX).fill(0);
let head = 0;
let tail = 0;

let answer = "";
for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	switch (op) {
		case "push":
			queue[tail++] = val;
			break;
		case "pop":
			if (head === tail) answer += "-1\n";
			else answer += queue[head++] + "\n";
			break;
		case "size":
			answer += tail - head + "\n";
			break;
		case "empty":
			if (tail - head === 0) answer += "1\n";
			else answer += "0\n";
			break;
		case "front":
			if (tail - head === 0) answer += "-1\n";
			else answer += queue[head] + "\n";
			break;
		case "back":
			if (tail - head === 0) answer += "-1\n";
			else answer += queue[tail - 1] + "\n";
			break;
	}
}
process.stdout.write(answer);
