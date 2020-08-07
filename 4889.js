/* 
Date: 2020-08-07 Fri 16:34
1st try: 22m 25s >> 통과
Comment: 처음에는 그리디로 해야하나 생각했다. 잘 생각해보니 수정하는 횟수가 패턴마다 정해져있다는걸 깨달았다.
{{: 1회 
}}: 1회
}{: 2회
문제에서 모든 brackets은 짝수개라고 주어졌기 때문에 맘 편하게 해당 패턴 별로 계산해서 풀었다.
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let answer = "";
for (let t = 0; true; t++) {
	let ret = t + 1 + ". ";
	let line = input[t];
	if (line[0] === "-") break;
	// console.log(line);

	let stack = [];

	for (let i = 0; i < line.length; i++) {
		let ch = line[i];

		if (ch === "{") stack.push(ch);
		else if (ch === "}") {
			if (stack[stack.length - 1] === "{") {
				stack.pop();
			} else {
				stack.push(ch);
			}
		}
	}
	// console.table(stack);

	let count = 0;
	while (stack.length > 0) {
		let top1 = stack.pop();
		let top2 = stack.pop();
		if (top1 === "{" && top2 === "{") {
			count++;
		} else if (top1 === "{" && top2 === "}") {
			count += 2;
		} else if (top1 === "}" && top2 === "}") {
			count++;
		}
	}
	answer += ret + count + "\n";
}

console.log(answer);
