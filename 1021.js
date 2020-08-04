/* 2020-08-04 Tue 22:16
1st try: 48m41s >> 통과 */

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let line = input[0].split(" ");
const N = Number(line[0]);
const M = Number(line[1]);
const num = input[1].split(" ").map((v, i) => Number(v));
// console.table(num);

const q = new Array(N).fill(0).map((v, i) => i + 1);
/* let head = 0;
let tail = 0; */
// console.table(q);

let answer = 0;
num.forEach((v) => {
	let pos = q.indexOf(v);
	// console.log("pos", pos);
	if (pos < Math.abs(pos - q.length)) {
		for (let j = 0; j < pos; j++) {
			answer++;
			q.push(q.shift());
		}
		q.shift();
	} else {
		for (let j = 0; j < Math.abs(pos - q.length); j++) {
			answer++;
			q.unshift(q.pop());
		}
		q.shift();
	}
	// console.table(q);
	// console.log(answer);
});
console.log(answer);
