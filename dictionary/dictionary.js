import ValuePair from "./value-pair.js";
import { defaultToString } from "../utils/index.js";

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  remove(key) {
    if (this.hashKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }

    return false;
  }

  hashKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];

    return valuePair == null ? undefined : valuePair.value;
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(callBackFn) {
    const values = this.keyValues();

    for (let i = 0; i < values.length; i++) {
      const result = callBackFn(values[i].key, values[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[0].toString()}`;
    }

    return objString;
  }
}
