let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let v = Number(input[2]);
let nums = input[1].split(" ");
let answer = 0;

for (let i = 0; i < nums.length; i++) {
	if (nums[i] == v) answer++;
}

console.log(answer);
