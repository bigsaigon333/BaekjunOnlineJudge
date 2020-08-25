/* 
Date: 2020-08-26 Wed 01:09
시간: 1h 11m 44s
Comments: 
1. 힙 개념을 이해한 후 나 나름대로 구현해보았으나 시간 초과 발생.
2. 바킹독 구현한 것보고 따라함. >> 통과
3. 아직 내것이 되지 않았다. 해쉬, 이진 검색 트리, 힙 문제 많이 풀어보자.
 */

"use strict";

let [N, ...nums] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
nums = nums.map((n) => Number(n));
let answer = "";
// console.log(commands);

const heap = Array(N + 1).fill(-1);
let size = 0;

const validation = () => {
	let parent = 1;

	while (parent * 2 <= size) {
		let child1 = parent * 2;
		let child2 = parent * 2 + 1;
		let minChild;
		if (heap[child1] < heap[child2] || child2 > size) minChild = child1;
		else minChild = child2;

		if (heap[parent] < heap[minChild]) break;
		[heap[parent], heap[minChild]] = [heap[minChild], heap[parent]];
		parent = minChild;
	}
};

const add = (val) => {
	heap[++size] = val;

	let child = size;

	while (child != 1) {
		let parent = Math.floor(child / 2);
		if (heap[parent] > heap[child])
			[heap[parent], heap[child]] = [heap[child], heap[parent]];

		child = parent;
	}
};

const top = () => {
	if (size === 0) return 0;
	else return heap[1];
};

const pop = () => {
	if (size === 0) return;

	[heap[1], heap[size]] = [heap[size], heap[1]];
	size--;

	validation();
};

nums.forEach((n) => {
	// console.log("n command: ", n);
	if (n === 0) {
		answer += top() + "\n";
		// console.log(top());
		pop();
	} else {
		add(n);
	}

	// console.log(heap);
});
console.log(answer);
