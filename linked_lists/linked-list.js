import Node from "./models/node.js";
import defaultEquals from "../utils/default-equals.js";

class LinkedList {
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

  insert(element, position) {}

  getElementAt(index) {}

  remove(element) {}

  indexOf() {}

  removeAt(position) {
    if (position >= 0 && this.count > position) {
      let current = this.head;

      if (position == 0) {
        this.head = current.next;
      } else {
        for (let i = 0; i < position - 1; i++) {
          current = current.next;
          this.head.next = current.next;
        }
      }
      this.count--;

      return current.element;
    }

    return undefined;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {}

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let elements = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.count; i++) {
      if (current.next == null) {
        break;
      } else {
        elements += ` => ${current.element} `;
      }

      current = current.next;
    }

    return elements;
  }
}

export { LinkedList };
