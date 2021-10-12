import Set from "./set.js";

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log("Union: ", setA.union(setB).values());
console.log("Intersections: ", setA.intersection(setB).values());
console.log("Difference: ", setA.difference(setB).values());
console.log("Is sub set: ", setA.isSubSetOf(setB));
