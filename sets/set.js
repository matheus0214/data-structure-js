export default class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;

      return true;
    }

    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];

      return true;
    }

    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();

    this.values().forEach((current) => unionSet.add(current));
    otherSet.values().forEach((current) => unionSet.add(current));

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((current) => {
      if (biggerSet.includes(current)) {
        intersectionSet.add(current);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();

    this.values().forEach((current) => {
      if (!otherSet.has(current)) {
        differenceSet.add(current);
      }
    });

    return differenceSet;
  }

  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubSet = true;

    this.values().every((current) => {
      if (!otherSet.has(current)) {
        isSubSet = false;
        return isSubSet;
      }

      return isSubSet;
    });

    return isSubSet;
  }
}
