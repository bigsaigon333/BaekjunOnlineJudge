/* 
Date: 2020-08-07 Fri 16:09
1st try: 13m 52s >> 통과
Comment: 메모리 누수 생각하지말고, 변수 선언하고 사용. 명시적으로 스택을 초기화하기 싫으면, 그냥 for문내에 스택 선언하기
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const T = Number(input[0]);

let answer = "";
for (let t = 1; t <= T; t++) {
	// console.log("case ", t);
	let line = input[t].split("");
	// console.log(line);
	let ret = "";
	let stack = [];
	for (let i = 0; i < line.length; i++) {
		// console.log(stack);
		if (line[i] === "(") {
			stack.push(line[i]);
		} else if (line[i] === ")") {
			if (stack.pop() !== "(") {
				ret = "NO";
				break;
			}
		}
	}
	if (ret === "" && stack.length === 0) ret = "YES";
	else ret = "NO";

	// console.log(ret);
	answer += ret + "\n";
}

console.log(answer);
