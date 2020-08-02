let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const text = input[0].split("");
text.unshift("");
const N = Number(input[1]);
// console.log(text, N);

let cur = text.length - 1;
for (let i = 0; i < N; i++) {
	let line = input[i + 2].split(" ");
	let operator = line[0];
	let operand = line[1];
	// console.log("operator operand", operator, operand);

	switch (operator) {
		case "L":
			cur = cur === 0 ? 0 : cur - 1;
			break;
		case "D":
			cur = cur === text.length - 1 ? text.length - 1 : cur + 1;
			break;
		case "B":
			if (cur !== 0) {
				text.splice(cur, 1);
				cur--;
			}
			break;
		case "P":
			cur++;
			text.splice(cur, -1, operand);
			break;
	}
}

console.log(text.join(""));
