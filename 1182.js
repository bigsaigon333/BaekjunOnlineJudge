/* 
Date: 2020-08-24 Mon 20:08
1st try: 6m 55s >> 통과
Comment: nodeJS에서 call-stack size를 늘리기 위해서는 --stack-size=val 옵션을 사용한다
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, S] = input[0].split(" ").map((n) => Number(n));

const nums = input[1].split(" ").map((n) => Number(n));

// console.log(nums);

let count = S === 0 ? -1 : 0;

const rec = (acc, lev) => {
	if (lev === N) {
		if (acc === S) count++;
		return;
	}

	rec(acc + nums[lev], lev + 1);
	rec(acc, lev + 1);
};

rec(0, 0);

console.log(count);
