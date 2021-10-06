import { Dequeue } from "./dequeue.js";

function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString == null ||
    (aString != null && aString.length === 0)
  ) {
    return false;
  }

  const dequeue = new Dequeue();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    dequeue.addBack(lowerString.charAt(i));
  }

  while (dequeue.size() > 1 && isEqual) {
    firstChar = dequeue.removeFront();
    lastChar = dequeue.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

// console.log(palindromeChecker("a", palindromeChecker("a")));
// console.log(palindromeChecker("aa", palindromeChecker("aa")));
console.log(palindromeChecker("kayak", palindromeChecker("kayak")));
