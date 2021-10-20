import HashTableLinearProbing from "./hash-table-linear-probing.js";

const hash = new HashTableLinearProbing();

hash.put("Ygritte", "hassumwim@ma.pw");
hash.put("Jonathan", "rul@sef.pw");
hash.put("Jamie", "hoto@az.il");
hash.put("Jack", "ju@zoz.fm");
hash.put("Jasmine", "do@bigad.ni");
hash.put("Jake", "uj@jeruwojet.org");
hash.put("Nathan", "be@tizma.om");
hash.put("Athelstan", "alsuter@tulvu.mv");
hash.put("Sue", "ge@ih.sm");
hash.put("Aethelwulf", "hu@ha.mr");
hash.put("Sargeras", "nireet@bupe.wf");
hash.remove("Jonathan");

console.log(hash.toString());
