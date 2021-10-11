import CircularLinkedList from "./circular-linked-list.js";

const circularLinkedList = new CircularLinkedList();
circularLinkedList.insert(12, 0);
circularLinkedList.insert(1, 1);
console.log(circularLinkedList.toString());

circularLinkedList.removeAt(0);
console.log(circularLinkedList.toString());

circularLinkedList.insert(12, 0);
console.log(circularLinkedList.toString());

circularLinkedList.removeAt(1);
console.log(circularLinkedList.toString());

circularLinkedList.insert(13, 1);
circularLinkedList.insert(14, 2);
console.log(circularLinkedList.toString());

circularLinkedList.removeAt(1);
console.log(circularLinkedList.toString());
