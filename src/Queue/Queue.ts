// Normally you'd just the built in shift and unshift array methods to
// emulate a queue, but since the whole point of this exercise is to
// implement from scratch, we'll ignore those methods.
export class Queue<T> {
  #elements: Array<T>;
  #rearIndex: number;
  #size: number;

  constructor() {
    this.#elements = new Array<T>();
    this.#rearIndex = 0;
    this.#size = 0;
  }

  enqueue(element: T) {
    this.#elements[this.#rearIndex] = element;

    this.#rearIndex += 1;
    this.#size += 1;
  }

  dequeue() {
    if (this.#size === 0) {
      throw new Error("Cannot dequeue an element from an empty queue");
    }

    const element = this.#elements[0];
    this.#elements.splice(0, 1);

    this.#rearIndex -= 1;
    this.#size -= 1;

    return element;
  }

  front() {
    return this.#elements[0];
  }

  back() {
    return this.#elements[this.#rearIndex - 1];
  }

  isEmpty() {
    return this.#size === 0;
  }

  size() {
    return this.#size;
  }
}
