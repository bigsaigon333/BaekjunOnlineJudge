/* Date: 2020-08-27 Thu 22:25
1st try: 3m 15s
Comment: 개념을 배우고 있을 시간이 없다. built-in function으로 가능한 건 바로 사용하고 pass해버리자
 */
let [, ...N] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

console.log(
	N.map((n) => Number(n))
		.sort((a, b) => a - b)
		.join("\n")
);
