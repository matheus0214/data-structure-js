import BinarySearchTree from "./binary-search-tree.js";

const bst = new BinarySearchTree();

bst.insert(12);
bst.insert(22);
bst.insert(2);
bst.insert(29);

const printNode = (value) => console.log(value);
bst.inOrderTraverse(printNode);

console.log("_____________________________");

bst.preOrderTraverse(printNode);

console.log("_____________________________");
bst.postOrderTraverse(printNode);

console.log("_____________________________");
console.log(bst.min());

console.log("_____________________________");
console.log(bst.max());

console.log("_____________________________");
console.log(bst.search(22));

console.log("_____________________________");
console.log(bst.remove(22));
bst.inOrderTraverse(printNode);
