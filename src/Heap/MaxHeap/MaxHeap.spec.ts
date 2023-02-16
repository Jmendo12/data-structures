import { MaxHeap } from "./MaxHeap";

describe("MaxHeap", () => {
  it("Can construct a MaxHeap instance", () => {
    const maxHeap = new MaxHeap();
    expect(maxHeap).toBeInstanceOf(MaxHeap);
  });

  it("Can insert elements into the MaxHeap", () => {
    const maxHeap = new MaxHeap();

    expect(() => maxHeap.insert(1)).not.toThrow();
  });

  it("Can get the max value in the heap", () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(1);
    expect(maxHeap.getMax()).toEqual(1);
  });

  it("Inserting multiple elements in the heap retains the properties of a max heap", () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(1);
    expect(maxHeap.getMax()).toEqual(1);

    maxHeap.insert(3);
    expect(maxHeap.getMax()).toEqual(3);

    maxHeap.insert(5);
    expect(maxHeap.getMax()).toEqual(5);
  });

  it("Can remove the max element and retain the max heap property", () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(1);
    maxHeap.insert(3);
    maxHeap.insert(5);

    expect(maxHeap.getMax()).toEqual(5);

    expect(maxHeap.removeMax()).toEqual(5);
    expect(maxHeap.getMax()).toEqual(3);

    expect(maxHeap.removeMax()).toEqual(3);
    expect(maxHeap.getMax()).toEqual(1);

    expect(maxHeap.removeMax()).toEqual(1);
    expect(maxHeap.getMax()).toBeNull();
  });

  it("Can build a heap from an array", () => {
    const maxHeap = new MaxHeap();
    expect(() =>
      maxHeap.buildHeap([1, 45, 6, 77, 0, 89, 100, 10])
    ).not.toThrow();

    expect(maxHeap.getMax()).toEqual(100);
  });
});
