let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);

for (let n = 1; n <= N; n++) {
	const line = input[n].split(" ");
	let str1 = line[0];
	let str2 = line[1];

	if (str1.length !== str2.length) {
		console.log("Impossible");
		continue;
	}

	let arr1 = new Array(26).fill(0);
	let arr2 = new Array(26).fill(0);

	for (let i = 0; i < str1.length; i++) {
		arr1[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
		arr2[str2.charCodeAt(i) - "a".charCodeAt(0)]++;
	}
	// console.log("arr1", arr1);
	// console.log("arr2", arr2);

	let answer = "Possible";
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			answer = "Impossible";
			break;
		}
	}
	console.log(answer);
}
