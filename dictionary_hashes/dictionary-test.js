import Dictionary from "./dictionary.js";

const dictionary = new Dictionary();
dictionary.set("Matilda Cross", "fas@alas.jo");
dictionary.set("Emma McCarthy", "ca@op.si");
dictionary.set("Virginia Bass", "im@cok.cx");

console.log(dictionary.hashKey("Emma McCarthy"));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Virginia Bass"));
console.log(dictionary.keyValues());

dictionary.forEach((key, value) => {
  console.log(`${key}--${value}`);
});
