import HashTable from "./hash-table.js";

const hashTable = new HashTable();
hashTable.put("Jared Poole", "hassumwim@ma.pw");
hashTable.put("Joseph Klein", "rul@sef.pw");
hashTable.put("Effie Clark", "hoto@az.il");

console.log(hashTable.hashCode("Jared Poole") + " - Jared Poole");
console.log(hashTable.hashCode("Joseph Klein") + " - Joseph Klein");
console.log(hashTable.hashCode("Effie Clark") + " - Effie Clark");

console.log(hashTable.get("Jared Poole"));

console.log(hashTable.toString());
