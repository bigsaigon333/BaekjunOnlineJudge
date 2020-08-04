/* 2020-08-04 Tue 14:28
1st try : 40m22s 
시간초과 but 논리는 맞는 것 같음*/
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input[0]);
const nums = input[1].split(" ");
let stack = [];

// console.log(nums);

for (let i = 0; i < N; i++) {
	// console.log("stack", stack);
	let height = parseInt(nums[i]);
	let top = stack[stack.length - 1];
	// console.log("top", top);

	if (top === undefined) {
		process.stdout.write(0 + " ");
	} else if (stack[0].h < height) {
		stack = [];
		process.stdout.write(0 + " ");
	} else {
		while (top !== undefined && top.h < height) {
			stack.pop();
			top = stack[stack.length - 1];
		}
		process.stdout.write(top.i === undefined ? 0 : top.i + " ");
	}

	stack.push({ h: height, i: i + 1 });
	// console.log("");
}
