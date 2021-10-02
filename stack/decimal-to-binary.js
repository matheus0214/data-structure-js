import { Stack } from "./stack.js";

const decimalToBinary = (number) => {
  const remStack = new Stack();
  let copyNumber = number;
  let rem;
  let binaryString = "";

  while (copyNumber > 0) {
    rem = Math.floor(copyNumber % 2);
    remStack.push(rem);
    copyNumber = Math.floor(copyNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};
console.log(decimalToBinary(10));
