import { LinkedList, ListNode } from "./LinkedList";

describe("ListNode", () => {
    it("creates a node with the given data", () => {
        const node = new ListNode<number>(1);

        expect(node.data).toEqual(1);
    });

    it("creates a node with another node for the next node", () => {
        const nextNode = new ListNode<number>(1);

        const firstNode = new ListNode<number>(1, nextNode);

        expect(firstNode.data).toEqual(1);
        expect(firstNode.data).toEqual(1);
    });

    it("the data and next properties can be set after creation", () => {
        const node = new ListNode<number>(1);

        expect(node.data).toEqual(1);

        const nextNode = new ListNode<number>(2);

        node.data = 3;
        node.next = nextNode;

        expect(node.data).toEqual(3);
        expect(node.next).toEqual(nextNode);
    });
});

describe("LinkedList", () => {
    it("Can create an empty linked list", () => {
        const list = new LinkedList<number>();

        expect(list.head).toBeNull();
    });

    it("can insert a node at the head of the list", () => {
        const list = new LinkedList<number>();

        list.insert(1);

        expect(list.head?.data).toEqual(1);
    });

    it("can insert a node at the end of the list", () => {
        const list = new LinkedList<number>();

        list.insert(1);
        list.insert(2);

        expect(list.head?.next).not.toBeNull();
        expect(list.head?.next?.data).toEqual(2);

        list.insert(3);
        expect(list.head?.next?.next).not.toBeNull();
        expect(list.head?.next?.next?.data).toEqual(3);
    });

    it("can remove a node with the given key from the list", () => {
        const list = new LinkedList<number>();
        list.insert(1);
        list.insert(2);
        list.insert(3);

        list.delete(2);
        expect(list.head?.next?.data).toEqual(3);

        list.delete(3);
        expect(list.head?.next).toBeNull();

        list.delete(1);
        expect(list.head).toBeNull();
    });

    it("can find a node with the given key from the list", () => {
        const list = new LinkedList<number>();
        list.insert(1);
        list.insert(2);
        list.insert(3);

        const firstNode = list.get(1);
        expect(firstNode).not.toBeNull();
        expect(firstNode?.data).toEqual(1);

        const secondNode = list.get(2);
        expect(secondNode).not.toBeNull();
        expect(secondNode?.data).toEqual(2);

        const thirdNode = list.get(3);
        expect(thirdNode).not.toBeNull();
        expect(thirdNode?.data).toEqual(3);

        expect(list.get(4)).toBeNull();
    });
    
    it("can print the list without error", () => {
        const list = new LinkedList<number>();
        list.insert(1);
        list.insert(2);
        list.insert(3);

        expect(() => list.printList()).not.toThrow();
    });
});