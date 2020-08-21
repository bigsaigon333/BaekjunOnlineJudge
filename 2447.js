/* 
Date: 2020-08-22 Sat 00:18
time: 1h 25m 26s >> 모범답안 참고하여 겨우 통과
Comment: 3 x 3 에서 시작하여 뻗어나감. (1,1) 에 해당하는건 재귀를 돌리지 않음으로써 " "이 찍히도록 한다.
 */

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let K = 0;
const MX = 8;
for (let i = 1; i <= MX; i++) {
	if (3 ** i === N) {
		K = i;
		break;
	}
}

const arr = new Array(N).fill(0).map(() => new Array(N).fill(" "));

const rec = (x, y, lev) => {
	if (lev === K) {
		console.log(`x: ${x}, y: ${y}`);
		arr[x][y] = "*";
		return;
	}
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (i === 1 && j === 1) continue;

			rec(x + 3 ** lev * i, y + 3 ** lev * j, lev + 1);
		}
	}
};

rec(0, 0, 0);

let answer = "";
for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		answer += arr[i][j];
	}
	answer += "\n";
}

console.log(answer);
