import { Queue } from "./Queue";

describe("Queue", () => {
  it("Can construct a queue", () => {
    const queue = new Queue<number>();
    expect(queue).not.toBeNull();
    expect(queue).toBeInstanceOf(Queue);
  });

  it("Can enqueue elements at the front of the queue", () => {
    const queue = new Queue<number>();

    // Since the internals of the queue are private, we will just test that we
    // can successfully insert elements without error.
    expect(() => queue.enqueue(1)).not.toThrow();
    expect(() => queue.enqueue(2)).not.toThrow();
    expect(() => queue.enqueue(3)).not.toThrow();
  });

  it("Can dequeue elements and return them in a FIFO order", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });

  it("Throws an error if attempting to dequeue an empty queue", () => {
    const queue = new Queue<number>();

    expect(() => queue.dequeue()).toThrow();
  });

  it("Can return the element at the front of the queue without removing it", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    expect(queue.front()).toEqual(1);

    queue.enqueue(2);
    expect(queue.front()).toEqual(1);

    queue.dequeue();
    expect(queue.front()).toEqual(2);
  });

  it("Can return the element at the back of the queue without removing it", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    expect(queue.back()).toEqual(1);

    queue.enqueue(2);
    expect(queue.back()).toEqual(2);

    queue.enqueue(3);
    expect(queue.back()).toEqual(3);
  });

  it("Can check if the queue is empty", () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it("Can retrieve the size of the queue", () => {
    const queue = new Queue<number>();
    expect(queue.size()).toEqual(0);

    queue.enqueue(1);
    expect(queue.size()).toEqual(1);

    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });
});
