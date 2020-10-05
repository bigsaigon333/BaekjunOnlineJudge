class Heapq {
	constructor(array) {
		this.heap = [null];

		if (array instanceof Array) {
			array.sort((a, b) => a - b);
			this.heap.push(...array);
		}
	}

	converToArray() {
		return this.heap.slice(1);
	}

	size() {
		// console.log(this.heap);
		return this.heap.length - 1;
	}

	parent(index) {
		return Math.floor(index / 2);
	}

	leftChild(index) {
		return index * 2;
	}

	rightChild(index) {
		return index * 2 + 1;
	}

	swap(index1, index2) {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}

	insert(val) {
		this.heap.push(val);

		let child = this.heap.length - 1;
		let parent = this.parent(child);

		while (parent >= 1 && this.heap[parent] > this.heap[child]) {
			this.swap(parent, child);

			[parent, child] = [this.parent(parent), parent];
		}
	}

	// if heap doesn't have any node(heap.length === 1), it returns undefined
	top() {
		return this.heap[1];
	}

	extractTop() {
		if (this.size() === 1) return this.heap.pop();

		let index = this.heap.length - 1;
		this.swap(1, index);
		const ret = this.heap.pop();

		this.heapify();

		return ret;
	}

	heapify() {
		if (this.size() === 1) return;

		let parent = 1;
		let leftChild = this.leftChild(parent);
		let rightChild = this.rightChild(parent);
		let minChild =
			this.heap[rightChild] && this.heap[rightChild] < this.heap[leftChild]
				? rightChild
				: leftChild;

		while (this.heap[parent] > this.heap[minChild]) {
			this.swap(parent, minChild);

			parent = minChild;
			leftChild = this.leftChild(parent);

			if (!leftChild) break;

			rightChild = this.rightChild(parent);
			minChild =
				this.heap[rightChild] && this.heap[rightChild] < this.heap[leftChild]
					? rightChild
					: leftChild;
		}
	}
}

module.exports = Heapq;
