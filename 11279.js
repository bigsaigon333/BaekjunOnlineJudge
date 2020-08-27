/* Date: 2020-08-27 Thu 12:13
1st try: 39m 26s >> 통과
Commens
1. Heap add 할때는 add한 leaft에서부터 root까지 거슬러 올라가면서 validation check
2. Heap pop 할때는 root부터 leaf까지 내려가며  validation check
 */

let [N, ...X] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
X = X.map((n) => Number(n));
// console.log("N: ", N);
// console.table(X);

let heap = Array(N + 1).fill(0);
let size = 0;

const add = (val) => {
	heap[++size] = val;

	let i = size;
	let p = Math.floor(i / 2);
	while (p > 0 && heap[p] < heap[i]) {
		[heap[p], heap[i]] = [heap[i], heap[p]];

		i = p;
		p = Math.floor(p / 2);
	}
};

const top = () => (size > 0 ? heap[1] : 0);
const pop = () => {
	if (size === 0) return;
	[heap[1], heap[size]] = [heap[size], heap[1]];

	let c = 1;
	while (c * 2 < size) {
		let max;
		if (c * 2 + 1 === size) max = c * 2;
		else max = heap[c * 2] > heap[c * 2 + 1] ? c * 2 : c * 2 + 1;

		if (heap[max] > heap[c]) [heap[max], heap[c]] = [heap[c], heap[max]];

		c = max;
	}

	size--;
};

const print = () => {
	if (size === 0) {
		console.log("N/A");
		return;
	}
	for (let i = 1; i <= size; i++) process.stdout.write(heap[i] + " ");
	console.log("");

	// let p = 1;
	// let q = [];
	// while (q.length > 0) {
	// 	let p = q.shift();
	// 	if (p * 2 <= size) {
	// 		process.stdout.write(heap[p * 2]);
	// 		q.push(p * 2);
	// 	}
	// 	if (p * 2 + 1 <= size) {
	// 		process.stdout.write(" " + heap[p * 2 + 1]);
	// 		q.push(p * 2 + 1);
	// 	}
	// }
};

let answer = "";
for (let i = 0; i < X.length; i++) {
	if (X[i] === 0) {
		// console.log(top());
		answer += top() + "\n";
		pop();
	} else {
		add(X[i]);
	}
	// process.stdout.write(X[i] + ": ");
	// print();
}
console.log(answer);
