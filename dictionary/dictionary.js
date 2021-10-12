import { defaultToString } from "../utils";

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  set(key, value) {}

  remove(key) {}

  hashKeys(key) {}

  get(key) {}

  clear() {}

  size() {}

  isEmpty() {}

  keys() {}

  values() {}

  keyValues() {}

  forEach(callBackFn) {}
}
