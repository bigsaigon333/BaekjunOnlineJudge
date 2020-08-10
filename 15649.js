/* 
Date: 2020-08-10 Mon 21:46
1st & 2nd try : 28m 45s >> 통과
Comments:
1. process.stdout.write 함수는 argument로 string만 받는다. 다른 거 넣으면 error 발생
2. backtracking 할때, 상태를 그래프로 생각해본다. 
3. 상태와 각 상태에 대한 결과물을 별도로 생각한다.
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

const isused = new Array(N + 1).fill(-1);

let answer = "";

const print = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		// process.stdout.write(arr[i] + " ");
		answer += arr[i] + " ";
	}
	// console.log("");
	answer += "\n";
};
const num = [];

const rec = (lev) => {
	if (lev === M) {
		print(num);
		return;
	}

	for (let i = 1; i <= N; i++) {
		if (isused[i] === -1) {
			isused[i] = lev;
			num[lev] = i;
			rec(lev + 1);
			isused[i] = -1;
		}
	}
};

rec(0);

console.log(answer);
