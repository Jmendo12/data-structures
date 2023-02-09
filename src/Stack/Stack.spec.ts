import { Stack } from "./Stack";

describe("Stack", () => {
  it("Can be instantiated", () => {
    const stack = new Stack<number>();
    expect(stack).not.toBeNull();
    expect(stack).toBeInstanceOf(Stack);
  });

  it("Can push elements onto the top of the stack", () => {
    const stack = new Stack<number>();

    // Since the internals of the stack are private, we will just test that we
    // can successfully insert elements without error.
    expect(() => stack.push(1)).not.toThrow();
    expect(() => stack.push(2)).not.toThrow();
    expect(() => stack.push(3)).not.toThrow();
  });

  it("Can pop elements off the top of the stack", () => {
    const stack = new Stack<number>();
    const elementOne = 1;
    const elementTwo = 2;
    const elementThree = 3;

    stack.push(elementOne);
    stack.push(elementTwo);
    stack.push(elementThree);

    expect(stack.pop()).toEqual(elementThree);
    expect(stack.pop()).toEqual(elementTwo);
    expect(stack.pop()).toEqual(elementOne);
  });

  it("Throws an error if attempting to pop an element before any elements are added", () => {
    const stack = new Stack<number>();

    expect(() => stack.pop()).toThrow();
  });

  it("Can peek the top element on the stack", () => {
    const stack = new Stack<number>();
    const elementOne = 1;
    const elementTwo = 2;
    const elementThree = 3;

    stack.push(elementOne);
    expect(stack.peek()).toEqual(elementOne);

    stack.push(elementTwo);
    expect(stack.peek()).toEqual(elementTwo);

    stack.push(elementThree);
    expect(stack.peek()).toEqual(elementThree);
  });

  it("Can determine if the stack is empty", () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);

    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it("Can return the size of the stack", () => {
    const stack = new Stack<number>();
    expect(stack.size()).toEqual(0);

    stack.push(1);
    expect(stack.size()).toEqual(1);

    stack.pop();
    expect(stack.size()).toEqual(0);
  });
});
