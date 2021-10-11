import Node from "./models/node.js";
import defaultEquals from "../utils/default-equals.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);

    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      /**
       * 1 - 5 - 2 - 3
       * previous (1)
       * current (3)
       */
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;

        previous.next = node;
        node.next = current;
      }

      this.count++;

      return true;
    }

    return false;
  }

  remove(element) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  removeAt(position) {
    if (position >= 0 && this.count > position) {
      let current = this.head;

      if (position == 0) {
        this.head = current.next;
      } else {
        /**
         * 1 -> 2 -> 3 -> 4 (3)
         * previous = 2
         * current = previous.next (3)
         * previous.next = current.next (3)
         */
        const previous = this.getElementAt(position - 1); // 2
        current = previous.next; // 3

        previous.next = current.next; // 4
      }
      this.count--;

      return current.element;
    }

    return undefined;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let current = this.head;
    let elements = `${current.element}`;
    current = current.next;

    for (let i = 1; i < this.count && current != null; i++) {
      elements += ` => ${current.element} `;
      current = current.next;
    }

    return elements;
  }
}
