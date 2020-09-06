// Date: 2020-09-06 Sun 15:33
// 1st try: 6m 48s >> 통과
// Comment: 너무 쉬운 문제가 나와도 당황스럽다 ;; 내가 모르는 무언가가 있을까봐..

const [A, B, C] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((n) => Number(n));

let ans = 0;
if (A === B && B === C) {
	ans = 10000 + A * 1000;
} else if (A === B) {
	ans = 1000 + 100 * A;
} else if (B === C) {
	ans = 1000 + 100 * B;
} else if (A === C) {
	ans = 1000 + 100 * C;
} else {
	ans = 100 * Math.max(A, B, C);
}

console.log(ans);
