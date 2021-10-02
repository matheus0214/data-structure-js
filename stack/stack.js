class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const elements = Object.values(this.items);
    return `COUNT: ${this.count}\nELEMENTS: ${elements}`;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.toString(), "\n");
// stack.pop();
// console.log(stack.toString(), "\n");

// stack.push(22);
// console.log("PEEK ELEMENT: ", stack.peek(), "\n");

// stack.clear();
// console.log(stack.toString());

// console.log(Object.getOwnPropertyNames(stack));

export { Stack };
