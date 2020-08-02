let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];

const freq = new Array(10).fill(0);
for (let i = 0; i < N.length; i++) {
	let j = N.charCodeAt(i) - "0".charCodeAt(0);
	freq[j]++;
}
let sum = freq[6] + freq[9];
freq[6] = Math.ceil(sum / 2);
freq[9] = sum - freq[6];

let answer = Math.max(...freq);
console.log(answer);
