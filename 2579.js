/* 
Date: 2020-08-25 Tue 01:22
1st try: 44m 59s >> 실패
Comment: 점화식을 어떻게 세우는지 전혀 감이 오지 않아 이것저것 방황하였다... 바킹독 해설을 보니 하나의 배열이 아닌 두개의 배열으로 표시하더라.. 크아..

Date: 2020-08-25 Tue 20:49
2nd try: 14m 49s
Comment: 점화식을 어떻게 세우느냐. 간단하면서도 명료한 정확한 그 점화식..
 */

let [N, ...stairs] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
stairs = [0, ...stairs.map((n) => Number(n))];
// console.log(stairs);

const d = Array(N + 1)
	.fill(0)
	.map(() => Array(2).fill(0));

d[1] = [stairs[1], stairs[1]];
// console.table(d);

for (let i = 2; i <= N; i++) {
	d[i][0] = Math.max(...d[i - 2]) + stairs[i];
	d[i][1] = d[i - 1][0] + stairs[i];
	// console.table(d);
}

console.log(Math.max(...d[N]));
