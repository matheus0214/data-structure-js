import Node from "./models/node.js";
import { compare } from "../utils/index.js";

const COMPARE = {
  LESS_THAN: -1,
  GREATER_THAN: 1,
};

export default class BinarySearchTree {
  constructor(compareFn = compare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if ((this.root = null)) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}
