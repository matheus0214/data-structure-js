const numbers = Array.from(Array(10).keys(), (i) => i + 1);

console.log(numbers);
console.log(numbers.includes(2));
console.log(numbers.includes(4, 3));
console.log(numbers.includes(4, 6));
