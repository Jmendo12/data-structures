import { MinHeap } from "./MinHeap";

describe("MinHeap", () => {
  it("Can create a heap instance", () => {
    const minHeap = new MinHeap();
    expect(minHeap).toBeInstanceOf(MinHeap);
  });

  it("Can insert elements into the MinHeap", () => {
    const minHeap = new MinHeap();

    expect(() => minHeap.insert(1)).not.toThrow();
  });

  it("Can get the min value in the heap", () => {
    const minHeap = new MinHeap();

    minHeap.insert(1);
    expect(minHeap.getMin()).toEqual(1);
  });

  it("Inserting multiple elements in the heap retains the properties of a min heap", () => {
    const minHeap = new MinHeap();

    minHeap.insert(5);
    expect(minHeap.getMin()).toEqual(5);

    minHeap.insert(3);
    expect(minHeap.getMin()).toEqual(3);

    minHeap.insert(1);
    expect(minHeap.getMin()).toEqual(1);
  });

  it("Can remove the min element and retain the max heap property", () => {
    const minHeap = new MinHeap();

    minHeap.insert(1);
    minHeap.insert(3);
    minHeap.insert(5);

    expect(minHeap.getMin()).toEqual(1);

    expect(minHeap.removeMin()).toEqual(1);
    expect(minHeap.getMin()).toEqual(3);

    expect(minHeap.removeMin()).toEqual(3);
    expect(minHeap.getMin()).toEqual(5);

    expect(minHeap.removeMin()).toEqual(5);
    expect(minHeap.getMin()).toBeNull();
  });

  it("Can build a heap from an array", () => {
    const minHeap = new MinHeap();
    expect(() =>
      minHeap.buildHeap([1, 45, 6, 77, 0, 89, 100, 10])
    ).not.toThrow();

    expect(minHeap.getMin()).toEqual(0);
  });
});
