/* 20208-08-03 Mon 11:26
1h02m27s */
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");
const n = Number(line[0]);
const m = Number(line[1]);
const MX = 500 + 5;
const board = new Array(MX).fill().map(() => new Array(MX).fill(0));
const vis = new Array(MX).fill().map(() => new Array(MX).fill(false));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < n; i++) {
	line = input[i + 1].split(" ");
	for (let j = 0; j < m; j++) {
		board[i][j] = Number(line[j]);
	}
}
// Q.push({ x: 0, y: 0 });
let max_area = 0;
let count = 0;

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		if (board[i][j] === 0 || vis[i][j]) continue;
		count++;
		const Q = [];
		Q.push({ x: i, y: j });
		vis[i][j] = true;
		let area = 0;

		while (Q.length > 0) {
			let cor = Q.shift();
			area++;
			// console.log("cor", cor);
			for (let k = 0; k < 4; k++) {
				let nx = cor.x + dx[k];
				let ny = cor.y + dy[k];
				// console.log("nx ny", nx, ny);

				if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
				if (vis[nx][ny] === true || board[nx][ny] !== 1) continue;

				Q.push({ x: nx, y: ny });
				vis[nx][ny] = true;
			}
		}
		max_area = Math.max(area, max_area);
		// console.log("area count", area, count);
	}
}

console.log(count);
console.log(max_area);
