import DoublyLinkedList from "./doubly-linked-list.js";

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(12, 0);
doublyLinkedList.insert(3, 0);
doublyLinkedList.insert(4, 2);
doublyLinkedList.insert(6, 1);

console.log(doublyLinkedList.toString());

doublyLinkedList.removeAt(0);
console.log(doublyLinkedList.toString());

doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.toString());

doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.toString());
