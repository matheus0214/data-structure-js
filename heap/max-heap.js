import { compare, reverseCompare } from "../utils/index.js";
import MinHeap from "./min-heap.js";

const COMPARE = {
    LESS_THAN: -1,
    GREATER_THAN: 1,
};

export default class MaxHeap extends MinHeap {
    constructor(compareFn = compare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}
