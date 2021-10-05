import { Queue } from "./queue.js";

const queue = new Queue();
console.log("Is Empty: ", queue.isEmpty());
console.log();

queue.enqueue("Effie Bowman");
queue.enqueue("Theodore Clayton");
console.log("Is Empty: ", queue.isEmpty());
console.log();

console.log(queue.toString());
console.log("Peek: ", queue.peek());
console.log();

queue.dequeue();
console.log(queue.toString());
