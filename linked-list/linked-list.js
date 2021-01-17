class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  push(value) {
    const node = new Node(value, null, this.last);
    if (this.last === null) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
  }

  pop() {
    const value = this.last.value;
    this.last = this.last.prev;
    if (this.last === null) {
      this.first = null;
    } else {
      this.last.next = null;
    }
    return value;
  }

  shift() {
    const value = this.first.value;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    } else {
      this.first.prev = null;
    }
    return value;
  }

  unshift(value) {
    const node = new Node(value, this.first, null);
    if (this.first === null) {
      this.last = node;
    } else {
      this.first.prev = node;
    }
    this.first = node;
  }

  delete(value) {
    if (this.first.value === value) {
      this.shift();
    } else if (this.last.value === value) {
      this.pop();
    }
    let node = this.first;
    while (node !== null) {
      if (node.value === value) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        break;
      }
      node = node.next;
    }
  }

  count() {
    let node = this.first;
    let i = 0;
    while (node !== null) {
      i++;
      node = node.next;
    }
    return i;
  }
}
