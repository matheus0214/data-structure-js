const data = Array.from(Array(10).keys(), (i) => i + 1);

// let interator = data[Symbol.interator]();
// console.log(interator.next().value);

// for (n of interator) {
//   console.log(n);
// }

let entries = data.entries();
/** Position, value */
console.log(entries.next().value);
console.log(entries.next().value);
