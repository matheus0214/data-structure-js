let i = 0;

function recursive() {
  i++;
  recursive();
}

try {
  recursive();
} catch (error) {
  console.log(i);
}
