/* 2020-08-04 Tue 12:12:53
4m59s */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const K = Number(input[0]);
const stack = [];

for (let k = 0; k < K; k++) {
	const num = Number(input[k + 1]);

	if (num === 0) {
		stack.pop();
	} else {
		stack.push(num);
	}
}
console.log(stack.reduce((acc, curr) => (acc += curr), 0));
