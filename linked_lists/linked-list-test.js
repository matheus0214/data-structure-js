import { LinkedList } from "./linked-list.js";

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(12);
linkedList.push(13);
linkedList.push(14);
console.log(linkedList.toString());

linkedList.removeAt(0);
// linkedList.removeAt(2);
console.log(linkedList.toString());
