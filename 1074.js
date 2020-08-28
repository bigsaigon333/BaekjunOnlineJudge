/* Date: 2020-08-28 Fri 21:54
1st try: 21m 48s >> 통과
Comment: 지저분하지만, 어쨋든 통과. 규칙을 빨리 캐치해내는게 중요.
 */
let [N, r, c] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((n) => Number(n));

// console.log(N, r, c);

const rec = (x, y, lev) => {
	if (lev === 0) {
		return 2 * x + y;
	}

	let bigx = Math.floor(x / lev);
	let bigy = Math.floor(y / lev);

	return lev ** 2 * (2 * bigx + bigy) + rec(x % lev, y % lev, lev / 2);
};

console.log(rec(r, c, 2 ** (N - 1)));
