import LinkedList from "./linked-list.js";
import defaultEqualsFn from "../utils/default-equals.js";
import DoublyNode from "./models/doubly-node.js";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqualsFn) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          /**
           * 12 (3)
           * node.next = 12
           * current.prev = 3
           * this.head = 3
           */
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index == this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        /**
         * 1 - 2 - 3 (4)
         * previous = 1
         * current = 2
         * node.next = this.head(1)
         * previous.next = 4
         * current.prev = 4
         * node.prev = 1
         */
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        ("");
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }

      this.count++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}
