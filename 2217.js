/* 
Date: 2020-08-27 Thu 01:32
1st try: 9m 56s >> 통과
Comment: 조금만 고민하니 금방 풀렸다. 깔끔하게 짧게 푸니 기분 좋다!!
 */
let [N, ...k] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((n) => Number(n));

console.log(Math.max(...k.sort((a, b) => b - a).map((v, i) => v * (i + 1))));
// console.log(k);

// let max = 0;
// for (let i = 0; i < N; i++) {
// 	max = Math.max(max, k[i] * (i + 1));
// }

// console.log(max);
