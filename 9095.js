/* Date: 2020-08-28 Fri 00:38
1st try: 45m 49s >> 통과
Comment: 
1. 어떤 유형의 문제인지 보지 않고 문제를 풀었다. DP라고 생각했는데, DP방법이 생각 안 나서 내 생각대로 풀었다.
N의 범위가 10밖에 되지 않아, 어떤 개똥같은 논리라도 시간초과는 안나올거라 생각한게 맞아 떨어졌다

2. 참고: https://jaemin8852.tistory.com/159
f(0) : - => 1
f(1) : (1) => 1
f(2) : (1,1), (2) => 2
f(3) : (1,1,1), (1,2), (2. 1), (3) => 4
점화식은 f(n) = f(n-1) + f(n-2) + f(n-3)

f(2)에 (2)가, f(3)에 (3)이 포함되지 않는다고 처음 잘못생각한게 큰 패착... DP로 풀면 금방 풀 수 있는데..

 */

let [T, ...N] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

T = Number(T);
N = N.map((n) => Number(n));

// console.log(N);

let answer = "";
for (let i = 0; i < N.length; i++) {
	let num = N[i];

	let q = [];
	let tmp = [];
	// let count = 0;
	for (let j = 0; j < num; j++) {
		tmp.push(1);
	}
	q.push(tmp);
	// console.log(tmp);

	let isused = new Set();
	isused.add(JSON.stringify(tmp));

	while (q.length > 0) {
		let curr = q.shift();
		for (let j = 1; j < curr.length; j++) {
			let val = curr[j];
			let arr = [...curr.slice(0, j), ...curr.slice(j + 1)];
			arr[j - 1] += val;
			// if (arr.length < 2) continue;
			if (arr[j - 1] > 3) continue;

			isused.add(JSON.stringify(arr));
			q.push(arr);
		}
	}
	answer += isused.size + "\n";
}

console.log(answer);
