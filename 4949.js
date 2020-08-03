/* 2020-08-03 Mon 11:38
11m59s */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
	let message = "";
	const stack = [];
	for (let j = 0; j < input[i].length; j++) {
		let char = input[i][j];
		if (char !== "(" && char !== ")" && char !== "[" && char != "]") continue;

		if (char === "(" || char === "[") {
			stack.push(char);
		} else if (char === ")") {
			if (stack[stack.length - 1] === "(") {
				stack.pop();
			} else {
				message = "no";
				continue;
			}
		} else if (char === "]") {
			if (stack[stack.length - 1] === "[") {
				stack.pop();
			} else {
				message = "no";
				continue;
			}
		}
	}
	if (message === "") {
		if (stack.length === 0) message = "yes";
		else message = "no";
	}
	console.log(message);
}
