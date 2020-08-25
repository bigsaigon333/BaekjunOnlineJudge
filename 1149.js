/* 
Date: 2020-08-25 Tue 21:08
1st try: 12m 09s
Comment: 논리를 미리 생각해두고 구현만 딱 하니 정말 시간이 짧게 걸리는구나!
 */

let [N, ...lines] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);

const R = 0;
const G = 1;
const B = 2;

let sum = Array(N)
	.fill(0)
	.map(() => Array(3).fill(0));

lines
	.map((line) => line.split(" ").map((v) => Number(v)))
	.forEach((cost, i) => {
		if (i === 0) {
			sum[0][R] = cost[R];
			sum[0][G] = cost[G];
			sum[0][B] = cost[B];

			return;
		}
		// console.log(i, cost);

		sum[i][R] += cost[R] + Math.min(sum[i - 1][G], sum[i - 1][B]);
		sum[i][G] += cost[G] + Math.min(sum[i - 1][R], sum[i - 1][B]);
		sum[i][B] += cost[B] + Math.min(sum[i - 1][G], sum[i - 1][R]);

		// console.table(sum);
	});

console.log(Math.min(...sum[N - 1]));
