/* Date: 2020-08-27 Thu 22:58
1st try: 30m 18s >> 통과
Comment: 바킹독 트리 강의를 안보았으면 절대 구현하지 못하였을 것이다.
내용만 아는 것을 처음 구현하는 것도 쉽지 않네!
 */
let [N, ...nodes] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);

nodes = nodes.map((line) =>
	line.split(" ").map((n) => {
		if (n === ".") return -1;
		else return n.charCodeAt(0) - "A".charCodeAt(0) + 1;
	})
);
// console.table(nodes);

let lc = Array(N + 1).fill(0);
let rc = Array(N + 1).fill(0);
let p = Array(N + 1).fill(0);

for (let i = 0; i < nodes.length; i++) {
	let [curr, l, r] = nodes[i];
	lc[curr] = l;
	rc[curr] = r;
	if (l !== -1) p[l] = curr;
	if (r !== -1) p[r] = curr;
}
// console.log(lc);
// console.log(rc);
// console.table(p);
let answer = "";
const preorder = (curr) => {
	answer += getChar(curr);
	if (lc[curr] !== -1) preorder(lc[curr]);
	if (rc[curr] !== -1) preorder(rc[curr]);
};

const inorder = (curr) => {
	if (lc[curr] !== -1) inorder(lc[curr]);
	answer += getChar(curr);
	if (rc[curr] !== -1) inorder(rc[curr]);
};

const postorder = (curr) => {
	if (lc[curr] !== -1) postorder(lc[curr]);

	if (rc[curr] !== -1) postorder(rc[curr]);
	answer += getChar(curr);
};

const getChar = (n) => {
	return String.fromCharCode(n - 1 + "A".charCodeAt(0));
};

preorder(1);
answer += "\n";

inorder(1);
answer += "\n";

postorder(1);

console.log(answer);
