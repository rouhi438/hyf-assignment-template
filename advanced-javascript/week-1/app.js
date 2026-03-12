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
