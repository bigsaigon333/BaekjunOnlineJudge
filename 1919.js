const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let word1 = String(input[0]);
let word2 = String(input[1]);

let arr1 = new Array(26).fill(0);
let arr2 = new Array(26).fill(0);

for (let i = 0; i < word1.length; i++) {
	let j = word1.charCodeAt(i) - "a".charCodeAt(0);
	arr1[j]++;
}

for (let i = 0; i < word2.length; i++) {
	let j = word2.charCodeAt(i) - "a".charCodeAt(0);
	arr2[j]++;
}

let answer = 0;
for (let i = 0; i < 26; i++) {
	answer += Math.abs(arr1[i] - arr2[i]);
}
console.log(answer);
