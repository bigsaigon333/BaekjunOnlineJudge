/* 2020-08-03 Mon 11:38
1st try: 11m59s
2020-08-03 Mon 22:22
2nd try: 6m00s */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
	const line = input[i];

	if (line === ".") break;

	let message = "";
	const stack = [];
	for (let j = 0; j < line.length; j++) {
		let char = line[j];
		if (char !== "(" && char !== ")" && char !== "[" && char != "]") continue;

		if (char === "(" || char === "[") {
			stack.push(char);
		} else if (char === ")") {
			if (stack[stack.length - 1] === "(") {
				stack.pop();
			} else {
				message = "no";
				break;
			}
		} else if (char === "]") {
			if (stack[stack.length - 1] === "[") {
				stack.pop();
			} else {
				message = "no";
				break;
			}
		}
	}
	if (message === "") {
		if (stack.length === 0) message = "yes";
		else message = "no";
	}
	console.log(message);
}
