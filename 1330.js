let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let A = Number(input[0]);
let B = Number(input[1]);

if (A > B) {
	console.log(">");
} else if (A < B) {
	console.log("<");
} else if (A === B) {
	console.log("==");
}
