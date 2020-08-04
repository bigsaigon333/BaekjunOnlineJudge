/* 2020-08-03 Mon 09:30
1st try: 12m00s >> 시간초과

2020-08-04 Tue 21:01
2nd try: 4m21s >> 통과. 출력처리 수정
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const MX = 10000 + 5;
const stack = new Array(MX).fill(0);
let pos = 0;

let answer = "";
for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let op = line[0];
	let val = Number(line[1]);

	if (op === "push") {
		stack[pos++] = val;
	} else if (op === "pop") {
		if (pos === 0) answer += "-1\n";
		else answer += stack[--pos] + "\n";
	} else if (op === "size") {
		answer += Math.max(0, pos) + "\n";
	} else if (op === "empty") {
		if (pos === 0) answer += "1\n";
		else answer += "0\n";
	} else if (op === "top") {
		if (pos === 0) answer += "-1\n";
		else answer += stack[pos - 1] + "\n";
	}
}

console.log(answer);
