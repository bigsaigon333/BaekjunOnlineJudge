/* Date: 2020-08-27 Thu 10:18
1st try: 13m 43s >> 통과
Comment: 1. st mid en 7 8 9 연속해 있을때 제대로 while문이 종료되는지, st mid en 모두 검색되게 되어 있는지 생각해보자.
2. Array.prototype.sort() 의 default callback 함수는 각 값을 string으로 변환한 후 이를 정렬하는 것이다. 따라서 숫자들을 
오름차순 또는 내림차순으로 정렬하고 싶다면 callback함수를 반드시 명시적으로 기재하여야 한다.
 */
let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);
const A = input[1]
	.split(" ")
	.map((n) => Number(n))
	.sort((a, b) => a - b);
const M = Number(input[2]);
const targets = input[3].split(" ").map((n) => Number(n));

let answer = "";
for (let i = 0; i < targets.length; i++) {
	let t = targets[i];

	let st = 0;
	let en = A.length - 1;
	let mid;

	while (st <= en) {
		mid = Math.floor((st + en) / 2);

		if (A[mid] === t) {
			console.log(1);
			answer += "1\n";
			break;
		} else if (A[mid] > t) {
			en = mid - 1;
		} else if (A[mid] < t) {
			st = mid + 1;
		}
	}

	if (A[mid] !== t) {
		answer += "0\n";
		console.log(0);
	}
}

console.log(answer);
