let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let line = input[0].split(" ");
const N = Number(line[0]);
const K = Number(line[1]);

const mens = new Array(7).fill(0);
const womens = new Array(7).fill(0);

for (let i = 1; i < input.length; i++) {
	line = input[i].split(" ");
	if (line[0] == 0) {
		womens[line[1]]++;
	} else if (line[0] == 1) {
		mens[line[1]]++;
	}
}
// console.log("mens", mens);
// console.log("womens", womens);

let answer =
	mens.reduce((acc, curr) => (acc += Math.ceil(curr / K)), 0) +
	womens.reduce((acc, curr) => (acc += Math.ceil(curr / K)), 0);

console.log(answer);
