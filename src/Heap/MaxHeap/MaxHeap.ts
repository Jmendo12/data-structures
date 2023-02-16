export class MaxHeap {
  #heap: number[];
  #elements: number;

  constructor() {
    this.#heap = [];
    this.#elements = 0;
  }

  insert(value: number) {
    if (this.#elements >= this.#heap.length) {
      this.#elements += 1;
      this.#heap.push(value);
      this.#percolateUp(this.#heap.length - 1);

      return;
    }

    this.#heap[this.#elements] = value;
    this.#elements += 1;
    this.#percolateUp(this.#elements - 1);
  }

  removeMax() {
    if (this.#elements <= 0) {
      return null;
    }

    const max = this.#heap[0];
    if (this.#elements > 1) {
      this.#heap[0] = this.#heap[this.#elements - 1];
      this.#elements = this.#elements - 1;

      this.#maxHeapify(0);
      return max;
    }

    if (this.#elements === 1) {
      this.#elements = this.#elements - 1;
      return max;
    }

    return null;
  }

  getMax() {
    if (this.#elements === 0) {
      return null;
    }

    return this.#heap[0];
  }

  buildHeap(arr: number[]) {
    this.#heap = arr;
    this.#elements = this.#heap.length;

    for (let i = this.#heap.length - 1; i >= 0; i--) {
      this.#maxHeapify(i);
    }
  }

  #percolateUp(index: number) {
    if (index <= 0) {
      return;
    }

    const parent = Math.floor((index - 1) / 2);

    if (this.#heap[parent] < this.#heap[index]) {
      this.#swap(parent, index);

      this.#percolateUp(parent);
    }
  }

  #maxHeapify(index: number) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let largest = index;

    if (this.#elements > left && this.#heap[largest] < this.#heap[left]) {
      largest = left;
    }

    if (this.#elements > right && this.#heap[largest] < this.#heap[right]) {
      largest = right;
    }

    if (largest !== index) {
      this.#swap(largest, index);

      this.#maxHeapify(largest);
    }
  }

  #swap(parentIndex: number, childIndex: number) {
    const temp = this.#heap[parentIndex];
    this.#heap[parentIndex] = this.#heap[childIndex];
    this.#heap[childIndex] = temp;
  }
}
