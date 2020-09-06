"use strict";

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = input[0].split(" ").map((n) => Number(n));

const name = [];
const step = [];

for (let i = 1; i < N + 1; i++) {
	let [n, s] = input[i].split(" ");
	s = Number(s);
	if (step.includes(s)) continue;

	name.push(n);
	step.push(s);
}
// console.table(name);
// console.table(step);

const nums = [];
input
	.filter((v, i) => i > N)
	.forEach((v, i) => {
		nums.push(Number(v));
	});

nums.sort((a, b) => a - b);
// console.table(nums);
let idx = 0;
const count = Array(N + 1).fill(0);
for (let i = 0; i < nums.length; i++) {
	if (nums[i] > step[idx]) idx++;
	count[idx]++;
}
// console.log(count);

for (let i = 0; i < count.length; i++) {
	for (let j = 0; j < count[i]; j++) process.stdout.write(name[i] + "\n");
}
