import BinarySearchTree from "./binary-search-tree.ts";
import RedBlackNode from "./models/red-black-node";
import { compare } from "../utils/index.js";

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 3,
    UNBALANCED_LEFT: 5,
};

const COMPARE = {
    LESS_THAN: -1,
    GREATER_THAN: 1,
};

export const Colors = {
    BLACK: "BLACK",
    RED: "RED",
};

export default class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = compare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;

                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        } else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;

            return node.right;
        } else {
            return this.insertNode(node.right, key);
        }
    }

    fixTreeProperties(node) {
        while (
            node &&
            node.parent &&
            node.parent.color.isRed() &&
            node.color !== Colors.BLACK
        ) {
            let parent = node.parent;
            const grandParent = parent.parent;

            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;

                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;

                    node = grandParent;
                } else {
                    // Caso 2A
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    // Caso 3A
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            } else {
                const uncle = grandParent.left;

                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    // Caso 2B
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    // Caso 3B
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            }
        }

        this.root.color = Colors.BLACK;
    }

    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;

        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }

        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }

        tmp.right = node;
        node.parent = tmp;
    }

    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;

        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }

        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }

        tmp.left = node;
        tmp.parent = tmp;
    }
}
