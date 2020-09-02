/* 
Date: 2020-09-02 Wed 20:23
1st try: 20m 18s >> 통과
Comment: 고작 4일 정도 Javascript로 문제를 풀지 않은 것인데, 벌써 문법이 헷갈리네. Python에 너무 집중해서 그런걸까? ㅋㅋㅋ... 당황쓰
참고용 답변: https://www.acmicpc.net/source/9027134   뭔가 자바스크립트 스럽게 쓴거 같기도하고.. 깔끔하게 잘 구현한 것 같다
 */

let [N, M, ...lines] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
N = Number(N);
M = Number(M);

const adj = Array(N + 1)
	.fill(0)
	.map(() => Array(N + 1).fill(false));

lines.forEach((v, i) => {
	[v1, v2] = v.split(" ").map((n) => Number(n));
	// console.log(v1, v2);

	adj[v1][v2] = true;
	adj[v2][v1] = true;
});

// console.table(adj);
const q = [1];
const vis = Array(N + 1).fill(false);

vis[1] = true;

while (q.length > 0) {
	let x = q.pop();

	for (let j = 1; j <= N; j++) {
		if (!adj[x][j] || x == j || vis[j]) continue;

		vis[j] = true;
		q.push(j);
	}
}

// console.table(adj);
// console.table(vis);
console.log(vis.filter((v) => v).length - 1);
