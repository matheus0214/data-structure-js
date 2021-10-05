import { Dequeue } from "./dequeue.js";

const dequeue = new Dequeue();

console.log("Is empty: ", dequeue.isEmpty(), "\n");
dequeue.addBack("John");
dequeue.addBack("Andrew");
console.log("Is empty: ", dequeue.isEmpty(), "\n");
console.log(dequeue.toString(), "\n");

dequeue.addBack("Camila");
console.log(dequeue.toString(), "\n");

dequeue.removeFront();
console.log(dequeue.toString(), "\n");

dequeue.removeBack();
console.log(dequeue.toString(), "\n");

dequeue.addFront("John");
console.log(dequeue.toString(), "\n");
