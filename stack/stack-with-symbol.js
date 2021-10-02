const _items = Symbol("stackItems");
class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }

  pop() {
    return this[_items].pop();
  }

  peek() {
    return this[_items][this[_items].length - 1];
  }

  isEmpty() {
    return this[_items].length === 0;
  }

  size() {
    return this[_items].length;
  }

  clear() {
    this[_items] = [];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack, "\n");
stack.pop();
console.log(stack, "\n");

stack.push(22);
console.log("PEEK ELEMENT: ", stack.peek(), "\n");

stack.clear();
console.log(stack);

const symbols = Object.getOwnPropertySymbols(stack);
console.log(symbols[0]);
stack[symbols[0]].push(10);
console.log(stack);
