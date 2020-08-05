/* Date: 2020-08-05 Wed 17:43
1st try: 2m 49s
comment: 머리식히기용 */

const score = Number(
	require("fs").readFileSync("/dev/stdin").toString().trim()
);

if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");
