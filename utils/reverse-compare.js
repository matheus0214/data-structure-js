export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}
