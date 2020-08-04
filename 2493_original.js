let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input[0]);
const nums = input[1].split(" ").map((v, i) => Number(v));
let stack = [];
// console.log(nums);

let answer = "";
for (let i = 0; i < N; i++) {
	let height = nums[i];
	let top = stack[stack.length - 1];

	while (top !== undefined && top.h < height) {
		stack.pop();
		top = stack[stack.length - 1];
	}

	if (top === undefined) answer += "0 ";
	else answer += top.i + " ";

	stack.push({ h: height, i: i + 1 });
	// console.log("");
}
process.stdout.write(answer);
