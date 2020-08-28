/* Date: 2020-08-29 Sat 01:22 
1st try: 1h 41m 20s >> unsolved
Comment: 그리디는 너무 어렵다... 신호등 같이 직선상에서 겹치게 하는 최소 문제 등은 너무 어렵다.. 풀이를 봐도 직관적으로 와닿지 않는다
 */
let [, ...dates] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map((n) => Number(n)))
	.map((arr) => [arr[0] * 100 + arr[1], arr[2] * 100 + arr[3]])
	.sort((a, b) => {
		if (a[0] === b[0]) return b[1] - a[1];
		else return a[0] - b[0];
	});
// console.log(dates);

if (dates[0][0] > 301) {
	console.log(0);
	return;
}

let curr = 0;
let max = 0;
let flag = false;
let count = 1;
while (dates[curr][1] <= 1130) {
	for (let i = curr + 1; i < dates.length; i++) {
		let [st, en] = dates[curr];
		let [new_st, new_en] = dates[i];

		if (new_st < en) {
			if (dates[max][1] < new_en) {
				max = i;
				flag = true;
			}
		}
	}

	if (flag) {
		// console.log(dates[curr]);
		curr = max;
		count++;
		flag = false;
	} else {
		console.log(0);
		return;
	}
}
// console.log(dates[curr]);
console.log(count);
