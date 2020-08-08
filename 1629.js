/* 
Date: 2020-08-07 Fri 23:25
8th try:  33m 02s >> 겨우 통과
Comments
1. Javascript에서는 모든 수를 실수로 저장한다는 사실을 알게 되었다. 따라서 큰 수의 곱을 한 경우, 정확하지 않을 수 있다.(ex: 2147483647 ** 2)
2. 이를 위하여 BigInt 를 사용하여 큰 수들을 다루면 된다. 이는 Number와 같이 사용되면 error를 뱉는다. 만약 Number constant 와 같이 쓰고 싶으면 1n, 0n 과 같이 뒤에 n을 붙여 사용한다.
3. BigInt를 그냥 console.log로 출력하면 뒤에 n이 붙어서 출력된다. 이를 방지하기 위해서는 toString()을 통해서 해결할 수 있다.
 */
let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");
// const MX = 2147483647;
// console.log(MX * MX);
let [A, B, C] = input.map((v) => BigInt(v));
// console.log(A, B, C);

if (A >= C) A %= C;

const rec = (b) => {
	if (b === 1n) return A % C;

	let val = rec((b - (b % 2n)) / 2n) % C;
	// console.log("num b", num, b);
	val = (val * val) % C;
	if (b % 2n === 0n) {
		return val;
	} else if (b % 2n === 1n) {
		return (val * A) % C;
	}
};

console.log(rec(B).toString());
