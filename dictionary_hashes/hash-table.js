import ValuePair from "./value-pair.js";
import { defaultToString } from "../utils/index.js";

export default class HashTable {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];

    return valuePair != null ? valuePair.value : undefined;
  }

  remove(key) {
    const hash = this.hashCode(keu);
    const valuePair = this.table[hash];

    if (valuePair != null) {
      delete this.table[hash];

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
