/* Date: 2020-08-27 Thu 00:51
1st try: 4m 45s >> 통과
Comment: 그리디 라는 걸 알고 나면 구현은 매우 간단
 */

let [first, ...coins] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let [N, K] = first.split(" ").map((n) => Number(n));

coins = coins.map((n) => Number(n)).sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
	answer += Math.floor(K / coins[i]);
	K %= coins[i];
}

console.log(answer);
