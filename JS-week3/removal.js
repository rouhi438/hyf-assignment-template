const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const removal = names.indexOf(nameToRemove);
console.log(removal)
names.splice(removal,1)

// names.splice(names.indexOf(nameToRemove),1)


console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']