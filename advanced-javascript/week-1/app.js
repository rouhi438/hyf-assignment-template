//== 1. Doubling of number =========================
const num = [2, 4, 3, 5, 9, 7, 13, 15];
const newNum = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    newNum.push(num[i] * 2);
  }
}
// --
const total = num
  .filter((number) => number % 2 !== 0)
  .map((sum) => (sum = sum * 2));

//== 2. CodeWars! ===============================

//== 8 kyu To square(root) or not to square(root)

const array = [6, 4, 8, 2, 64, 11, 8, 9];
const newArray = array.map((ar) => {
  const root = Math.sqrt(ar);
  if (Number.isInteger(root)) {
    return root;
  } else {
    return ar * ar;
  }
});

//== 8 kyu Removing Elements
const names = ["Carl", "Mads", "Sara", "John", "Vlad", "Victor", "Martin"];

const newName = [];
for (let i = 0; i < names.length; i += 2) {
  newName.push(names[i]);
}
console.log(newName);

const newNameArray = names.filter((name, index) => {
  return index % 2 === 0;
});
