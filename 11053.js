/* 
Date: 2020-08-25 Tue 21:48
1st try: 15m 32s >> 통과
Comment: O(N^2)이라 어떡하나 싶었는데 N이 1,000 이라서 일단 무난하게 풀었다.
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map((n) => Number(n));

const d = Array(N).fill(0);
d[0] = 1;

const getLess = (val, idx) => {
	let max = 0;
	for (let i = 0; i < idx; i++) {
		if (A[i] < val) {
			max = Math.max(d[i], max);
		}
	}

	return max;
};

for (let i = 1; i < N; i++) {
	d[i] = getLess(A[i], i) + 1;
}

console.log(Math.max(...d));
