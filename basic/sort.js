const friends = [
  { name: "May Harvey", age: 19 },
  { name: "Garrett Phelps", age: 18 },
];

const compareFriend = (a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  }

  return 0;
};

console.log(friends.sort(compareFriend));

const friendNames = ["Ana", "John", "ana", "john"];
console.log(friendNames.sort((a, b) => a.localeCompare(b)));
