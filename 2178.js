/* 
Date: 2020-08-07 Fri 17:27
1st try: 43m 31s
Comments: 1. Q를 두개 사용할 필요가 없다. 어차피 동일한 행동을 반복하므로 shift() -> push() 로 계속해서 while문을 돌려준다.
2. 핵심은  vis[][]. 한번 방문했던 곳은 두번 방문하지 않게 함으로써 중복을 막고 효율적으로 동작하게 한다.

2nd try: -- 바킹독 알고리즘 보고 아래와 같이 수정.--
1. vis[][] 대신 dist [][] 사용하여, 해당 좌표까지의 거리를 dist에 저장. dist를 -1로 초기화 시켜두고, dist가 0보다 크면 더이상 수행 안하게 함.
dist값이 작은게 이미 들어와버리면, 더 큰 값이 오더라도 반응X
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let line = input[0].split(" ");
const N = Number(line[0]);
const M = Number(line[1]);

const maze = new Array(N).fill(0).map((v, i) => {
	return input[i + 1].split("").map((val) => Number(val));
});
// console.log(maze);

const dist = new Array(N).fill(0).map(() => new Array(M).fill(-1));
dist[0][0] = 0;
// console.log(vis);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let q = [{ x: 0, y: 0, dist: 1 }];
let answer = [];

while (q.length > 0) {
	let cor = q.shift();
	// console.log("cor", cor);
	for (let i = 0; i < 4; i++) {
		let nx = cor.x + dx[i];
		let ny = cor.y + dy[i];

		if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
		if (dist[nx][ny] >= 0 || maze[nx][ny] === 0) continue;

		dist[nx][ny] = dist[cor.x][cor.y] + 1;
		q.push({ x: nx, y: ny });
	}
	// console.log("q", q);
}
// console.table(dist);
console.log(dist[N - 1][M - 1] + 1);
