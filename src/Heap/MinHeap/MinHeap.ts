export class MinHeap {
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
    } else {
      this.#heap[this.#elements] = value;
      this.#elements += 1;
      this.#percolateUp(this.#elements - 1);
    }
  }

  removeMin() {
    if (this.#elements === 0) {
      return null;
    }

    const min = this.#heap[0];
    if (this.#elements > 1) {
      this.#heap[0] = this.#heap[this.#elements - 1];
      this.#elements -= 1;
      this.#minHeapify(0);

      return min;
    }

    if (this.#elements === 1) {
      this.#elements = this.#elements - 1;
      this.#heap.length = 0;
      return min;
    }
  }

  buildHeap(arr: number[]) {
    this.#heap = arr;
    this.#elements = this.#heap.length;

    for (let i = this.#heap.length - 1; i >= 0; i--) {
      this.#minHeapify(i);
    }
  }

  getMin() {
    if (this.#heap.length === 0) {
      return null;
    }

    return this.#heap[0];
  }

  #percolateUp(index: number) {
    if (index <= 0) {
      return;
    }

    const parent = Math.floor((index - 1) / 2);
    if (this.#heap[parent] > this.#heap[index]) {
      this.#swap(parent, index);
      this.#percolateUp(parent);
    }
  }

  #minHeapify(index: number) {
    let smallest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (this.#elements > left && this.#heap[smallest] > this.#heap[left]) {
      smallest = left;
    }

    if (this.#elements > right && this.#heap[smallest] > this.#heap[right]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.#swap(smallest, index);
      this.#minHeapify(smallest);
    }
  }

  #swap(parentIndex: number, childIndex: number) {
    const temp = this.#heap[parentIndex];
    this.#heap[parentIndex] = this.#heap[childIndex];
    this.#heap[childIndex] = temp;
  }
}
