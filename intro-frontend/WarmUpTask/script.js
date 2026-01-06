//-- remove first and last character of string

const characters = "eloquent";
let newCharacter = characters.slice(1, characters.length - 1);
console.log(newCharacter);

//-- function for remove first and last character of string
function sliceString(item) {
  return item.slice(1, item.length - 1);
}
console.log(sliceString("abbas"));
console.log(sliceString("ab"));
console.log(sliceString("abb"));

//-- Present sheep
const sheepList = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const present = sheepList.filter((sheep) => sheep === true);
console.log(present.length);

// Returns true if the first string ends with the second string

const str = ["abc"];
const result = str.some((s) => s.includes("d"));

//-- odd or even
let outPut = "";

function oddOrEven(inputNum) {
  let sum = inputNum.reduce((total, current) => total + current, 0);
  return sum % 2 === 0 ? `outPut: "even"` : `outPut : "odd"`;
}
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 4, 9, 3]));
console.log(oddOrEven([0, -1, 5, -2]));
console.log(oddOrEven([0, 3, 6, -4]));
