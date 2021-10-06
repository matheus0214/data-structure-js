import { Queue } from "./queue.js";

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = [
  "Jason Paul",
  "Stanley Allen",
  "Christian Brady",
  "Craig Gomez",
  "Joe Porter",
];
/**
1"Jason Paul"
2"Stanley Allen"
3"Christian Brady"
4"Craig Gomez"
5"Joe Porter"
0 -> 
1 -> 
2 -> "Christian Brady"
3 -> "Craig Gomez"
4 -> "Joe Porter"
5 -> "Jason Paul"
6 -> "Stanley Allen"
*/
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} - was eliminated`);
});

console.log(`Winner ${result.winner}`);
