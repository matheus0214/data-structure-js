import LinkedList from "../linked_lists/linked-list.js";
import ValuePair from "./value-pair.js";
import { defaultToString } from "../utils/index.js";

export default class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }

      this.table[position].push(new ValuePair(key, value));

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }

    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);

          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
        }
        current = current.next;
      }

      return true;
    }

    return false;
  }

  toString() {
    if (Object.keys(this.table) === 0) {
      return "";
    }

    const keys = Object.keys(this.table);
    let objString = `#${keys[0]} => ${this.table[keys[0]]}`;

    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}\n#${keys[i]} => ${this.table[keys[i]]}`;
    }

    return objString;
  }

  loseLoseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
}
