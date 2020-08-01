let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let N = Number(input[0]);
let answer = 0;

for (let i = 1; i <= N; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		answer += i;
	}
}

console.log(answer);
