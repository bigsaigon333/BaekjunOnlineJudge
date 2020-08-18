/* Date: 2020-08-11 Tue 21:39
try: 1h 00m 07s >> 겨우 통과
comments
1. maze를 q validation 할때 적절히 활용하자. 
2. dist(fire, escape)의 초기값은 -1로 해두는게 마음 편하다.
3. dist는 거리라는 걸 명심해라. 그러면 초기값을 -1로 하는게 마음이 편하다. 다만,  while 문 내 continue 할때 maze를 충분히 할용해라
  */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [R, C] = input[0].split(" ").map((v) => Number(v));

const maze = new Array(R).fill(0).map((v, i) => input[i + 1].split(""));
const fire = new Array(R).fill(0).map(() => new Array(C).fill(-1));
const escape = new Array(R).fill(0).map(() => new Array(C).fill(-1));

const MX = 1000000 + 5;
const q1 = new Array(MX);
const q2 = new Array(MX);
let head1 = 0;
let tail1 = 0;
let head2 = 0;
let tail2 = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const q1_push = (val) => (q1[tail1++] = val);
const q1_shift = () => q1[head1++];
const q1_size = () => tail1 - head1;

const q2_push = (val) => (q2[tail2++] = val);
const q2_shift = () => q2[head2++];
const q2_size = () => tail2 - head2;

for (let x = 0; x < R; x++) {
	for (let y = 0; y < C; y++) {
		if (maze[x][y] === "F") {
			q1_push({ x, y });
			fire[x][y] = 0;
		} else if (maze[x][y] === "J") {
			q2_push({ x, y });
			escape[x][y] = 0;
		}
	}
}
// console.table(fire);
// console.table(escape);
// console.table(q1);

while (q1_size() > 0) {
	let curr = q1_shift();
	for (let i = 0; i < 4; i++) {
		const x = curr.x + dx[i];
		const y = curr.y + dy[i];

		if (x < 0 || x >= R || y < 0 || y >= C) continue;
		if (fire[x][y] >= 0 || maze[x][y] === "#") continue;

		fire[x][y] = fire[curr.x][curr.y] + 1;
		q1_push({ x, y });
	}
}

// console.table(fire);

while (q2_size() > 0) {
	let curr = q2_shift();
	// console.table(escape);
	for (let i = 0; i < 4; i++) {
		const x = curr.x + dx[i];
		const y = curr.y + dy[i];

		if (x < 0 || x >= R || y < 0 || y >= C) {
			// console.table(escape);
			console.log(escape[curr.x][curr.y] + 1);
			return;
		}
		if (maze[x][y] === "#" || escape[x][y] >= 0) continue;
		if (fire[x][y] !== -1 && escape[curr.x][curr.y] + 1 >= fire[x][y]) continue;
		escape[x][y] = escape[curr.x][curr.y] + 1;
		q2_push({ x, y });
	}
}
// console.table(escape);
console.log("IMPOSSIBLE");
