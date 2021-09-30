interface Comparable<T> {
  compareTo(val: T): number;
}

/**
 * @constructor
 * @param {number} age - specify the age of the person
 */
class MyObject implements Comparable<MyObject> {
  private __age: number;

  /**
   * @param val - Other user to compare ages
   * @returns number
   */
  compareTo(val: MyObject): number {
    if (this.__age === val.__age) {
      return 0;
    }

    return this.__age > val.__age ? 1 : -1;
  }

  /**
   * @returns {number} return person age
   */
  get age(): number {
    return this.__age;
  }
}
