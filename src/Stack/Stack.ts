// Normally you'd just the built in push and pop array methods to
// emulate a stack, but since the whole point of this exercise is to
// implement from scratch, we'll ignore those methods.
export class Stack<T> {
  #elements: Array<T>;
  #topIndex: number;
  #size: number;

  constructor() {
    this.#elements = new Array<T>();
    this.#topIndex = 0;
    this.#size = 0;
  }

  push(value: T) {
    this.#elements[this.#topIndex] = value;

    this.#topIndex += 1;
    this.#size += 1;
  }

  pop() {
    const element = this.#elements[this.#topIndex - 1];
    this.#elements.splice(-1, 1);

    this.#topIndex -= 1;
    this.#size -= 1;

    return element;
  }

  peek() {
    return this.#elements[this.#topIndex - 1];
  }

  isEmpty() {
    return this.#size === 0;
  }

  size() {
    return this.#size;
  }
}
