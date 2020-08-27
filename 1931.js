/* Date: 2020-08-27 Thu 01:17
1st try: 21m 25s >> 통과
Comment:  task scheduling problem. 그리디는 정말 감이 오지 않는다... 고민하다가 안되어서 바로 풀이법 찾아보다.
 */

let [N, ...meetings] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);

meetings = meetings
	.map((line) => line.split(" "))
	.map((v) => [Number(v[0]), Number(v[1])])
	.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		else return a[1] - b[1];
	});

// console.table(meetings);

let curr = meetings[0][1];
let answer = 1;

for (let i = 1; i < N; i++) {
	if (curr <= meetings[i][0]) {
		answer++;
		curr = meetings[i][1];
		// console.log(meetings[i]);
	}
}
console.log(answer);
