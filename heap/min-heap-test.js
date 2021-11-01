import MinHeap from "./min-heap.js";

const mh = new MinHeap();
mh.insert(2);
mh.insert(3);
mh.insert(4);
mh.insert(5);
mh.insert(1);

console.log("Size:", mh.size());
console.log("Is empty:", mh.isEmpty());
console.log("Minimum:", mh.findMinimum());
console.log("Extract:", mh.extract());
