/* Date: 2020-08-28 Fri 01:01
1st try: 7m 27s >> 통과
Comment: 너무 쉬운 그리디였네..
 */

let T = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const A = 300;
const B = 60;
const C = 10;

let [nA, nB, nC] = [0, 0, 0];

nA = Math.floor(T / A);
T %= A;

nB = Math.floor(T / B);
T %= B;

nC = Math.floor(T / C);
T %= C;

if (T !== 0) console.log(-1);
else console.log(`${nA} ${nB} ${nC}`);
