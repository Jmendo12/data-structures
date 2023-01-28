export class ListNode<T> {
  data: T;
  next: null | ListNode<T>;

  constructor(data: T, next: ListNode<T> | null = null) {     
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  insert(data: T) {
    if (this.head === null) {
      this.head = new ListNode(data);
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = new ListNode(data);
  }

  delete(data: T) {
    if (this.head && this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let prev = null;
    let current = this.head;

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current && prev) {
      prev.next = current.next;
    }
  }

  get(data: T) {
    if (this.head && this.head.data === data) {
      return this.head;
    }

    let current = this.head;

    while (current && current.data !== data) {
      current = current.next;
    }

    return current;
  }

  printList() {
    let temp = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}