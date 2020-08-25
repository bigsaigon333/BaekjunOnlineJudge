/* 
Date: 2020-08-25 Tue 21:28
1st try: 11m 04s >> 통과
Comment: Greedy와 DP의 차이점. Greedy는 문제의 조건이 축소되었을때에도 맞는 정답, 즉 부분해를 구해서 푸는 것이고
DP는 최종해를 구하기 위한 과정들을 저장해서 푸는 것.
이게 정확한 차이인지는 잘 모르겠다...
 */

let [N, nums] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
nums = nums.split(" ").map((n) => Number(n));
// console.log(N);
// console.log(nums);
const d = Array(N).fill(0);
d[0] = nums[0];

for (let i = 1; i < N; i++) {
	d[i] = Math.max(d[i - 1], 0) + nums[i];
}

console.log(Math.max(...d));
