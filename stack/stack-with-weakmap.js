const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    items.get(this).push(element);
  }

  pop() {
    return items.get(this).pop();
  }

  peek() {
    return items.get(this)[items.get(this).length - 1];
  }

  isEmpty() {
    return items.get(this).length === 0;
  }

  size() {
    return items.get(this).length;
  }

  clear() {
    items.set(this, []);
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const elements = items.get(this);
    return `COUNT: ${items.get(this).length}\nELEMENTS: ${elements}`;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.toString(), "\n");
stack.pop();
console.log(stack.toString(), "\n");

stack.push(22);
console.log("PEEK ELEMENT: ", stack.peek(), "\n");

stack.clear();

console.log(Object.getOwnPropertyNames(stack));
