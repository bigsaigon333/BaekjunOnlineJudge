/* Date: 2020-08-28 Fri 23:19
1st try: 11m 30s
Comment: 조합 생성하는 문제.  index와 value가 다를때에는 value 배열에  mapping하면 됨
 */

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const main = (line) => {
	if (line[0] === "0") return;

	let [K, ...S] = line.split(" ").map((n) => Number(n));
	// console.log(S);

	let isused = Array(K).fill(false);
	let MX = 6;

	const rec = (last, lev) => {
		if (lev === MX) {
			for (let i = 0; i < K; i++) {
				if (isused[i]) process.stdout.write(S[i] + " ");
			}
			console.log("");
			return;
		}

		for (let i = last + 1; i < K; i++) {
			if (isused[i]) continue;
			isused[i] = true;
			rec(i, lev + 1);
			isused[i] = false;
		}
	};

	rec(-1, 0);
	console.log("");
};

input.forEach(main);
