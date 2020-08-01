let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let S = String(input[0]);

// console.log(S);
let freq = new Array(26).fill(0);
// console.log(freq.length);

for (let i = 0; i < S.length; i++) {
	let j = S.charCodeAt(i) - "a".charCodeAt(0);
	freq[j]++;
}

freq.forEach((value, index) => process.stdout.write(value + " "));
