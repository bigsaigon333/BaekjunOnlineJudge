/* 
Date: 2020-08-10 Mon 21:55
1st try & 2nd try: 26m 43s
Comments
1. Javascript Array shift function의 시간복잡도는 O(N)이다. 
이번 문제에서 최대 N이 1,000이었음에도 불구하고 계속해서 shift()를 하였더니, 시간초과가 발생하였다.
이럴때는 arr, head, tail 을 가지고 직접 q를 구현하여서 문제를 풀면 된다.
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let line = input[0].split(" ");
const M = Number(line[0]);
const N = Number(line[1]);

const MX = 1000 + 5;
const board = [];
const date = [];
const q = new Array(MX).fill(0);
let head = 0;
let tail = 0;

const q_push = (dat) => {
	q[tail++] = dat;
};

const q_shift = () => {
	return q[head++];
};

const q_size = () => tail - head;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 1; i <= N; i++) {
	line = input[i].split(" ").map((v) => Number(v));
	board.push(line);
	date.push(line);
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (board[i][j] === 1) {
			// q.push({ x: i, y: j });
			q_push({ x: i, y: j });
		}
	}
}
// console.table(date);
// console.table(q);

while (q_size() > 0) {
	// let cor = q.shift();
	let cor = q_shift();
	// console.log(cor);
	for (let i = 0; i < 4; i++) {
		const nx = cor.x + dx[i];
		const ny = cor.y + dy[i];

		if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
		if (date[nx][ny] === 0) {
			date[nx][ny] = date[cor.x][cor.y] + 1;
			// q.push({ x: nx, y: ny });
			q_push({ x: nx, y: ny });
		}
	}
}
// console.table(date);

let max = 0;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (date[i][j] === 0) {
			console.log(-1);
			return;
		}
		if (date[i][j] > max) max = date[i][j];
	}
}
console.log(max - 1);
