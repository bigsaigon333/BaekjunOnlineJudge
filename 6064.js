/* Date: 2020-08-29 Sat 01:46
1st try: 22m 56s >> 통과
Comment: 너무 어렵게, 너무 간단하게 풀려고 하지 말자. 시간내로 정확하게 풀어내는게 중요한 것이지, 최적의 방법으로 풀 필요는 없다.
 */

let [, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map((n) => Number(n)));
// console.table(input);

input.forEach(([M, N, x, y]) => {
	if (N > M) {
		[M, N, x, y] = [N, M, y, x];
	}

	[x, y] = [x % M, y % N];

	let gcd = getGCD(M, N);
	let lcm = getLCM(M, N);

	for (let i = 0; i < M / gcd; i++) {
		let num = i * M + x;

		if (num % N === y) {
			console.log(num);
			return;
		}
	}

	console.log(-1);
});

function getLCM(a, b) {
	return (a * b) / getGCD(a, b);
}

function getGCD(a, b) {
	// console.log(a, b);
	if (a % b === 0) return b;

	return getGCD(b, a % b);
}
