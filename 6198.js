/* Date: 2020-08-05 Wed
1st try: 1h 03m 32s >> 통과
comment: 탑과 동일한 로직. 문제에 주어진 문구를 그대로 코딩으로 구현하는 게 아니라, 숨겨져있는 의미를 파악하여 최적화된 알고리즘을 구현
*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);
const h = new Array(N);
for (let i = 0; i < N; i++) {
	h[i] = Number(input[i + 1]);
}
// console.table(h);

let sum = 0;
let stack = [];

for (let i = N - 1; i >= 0; i--) {
	while (stack.length > 0 && h[i] > stack[stack.length - 1].val) {
		stack.pop();
	}
	let num = 0;
	if (stack.length === 0) num = N - 1 - i;
	else num = stack[stack.length - 1].idx - i - 1;
	sum += num;
	// console.log(stack);
	// console.log("num", num);

	stack.push({ idx: i, val: h[i] });
}

console.log(sum);
