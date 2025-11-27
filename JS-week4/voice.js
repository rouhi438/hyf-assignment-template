let userName = null;
const currentDate = new Date();
const date = currentDate.getDate();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
const jokes = [
  "What's the smartest insect? A spelling bee!😅",
  "What is fast, loud and crunchy? A rocket chip.😜",
  "How does the ocean say hi? It waves!😎",
];
const toDo = ["Learn JavaScript", "Meet the mentors"];
//========= math function =====================================
function MatheMatical(num1, num2, operators) {
  if (operators === "+" || operators === "plus") return num1 + num2;
  if (operators === "*" || operators === "times") return num1 * num2;
  if (operators === "-" || operators === "minus") return num1 - num2;
  if (operators === "/" || operators === "divided") return num1 / num2;
  if (operators === "**" || operators === "power") return num1 ** num2;
  return "I can not calculate that.";
}
//========= time function =====================================

function setTime(timeInMinutes) {
  const secondPerMinute = 60;
  const milliSecondPerSecond = 1000;

  const waitTime = timeInMinutes * secondPerMinute * milliSecondPerSecond;

  setTimeout(() => {
    console.log("Timer done...");
  }, waitTime);
}
//=============================================================

function getReply(command) {
  let dicTate = command.toLowerCase();
  let item = dicTate.split(" ");
  //_________________________Name_________________________________
  if (dicTate.startsWith("hello, my name is")) {
    const index = item.indexOf("is") + 1;
    userName = item[index];
    return `Hi, Nice to meet you ${userName}`;
  } else if (dicTate === "what is my name?") {
    return userName ? `Your name is ${userName}` : "I don't know your name";
  } //__________________________toDo______________________________
  else if (dicTate.startsWith("add") && dicTate.endsWith("to my todo")) {
    const itemToAdd = item.slice(1, item.length - 3).join(" ");
    toDo.push(itemToAdd);
    return `Added ${itemToAdd} to your todo`;
  } else if (dicTate === "what is on my todo") {
    if (toDo.length === 0) return "Your todo is empty";
    else return `You have ${toDo.length} todos - ${toDo.join(", ")}`;
  } else if (dicTate.startsWith("remove") && dicTate.endsWith("from my todo")) {
    const itemToRemove = dicTate
      .replace("remove", "")
      .replace("from my todo", "")
      .trim();
    const index = toDo.indexOf(itemToRemove);
    if (index === -1) return `${itemToRemove} is not in your todo`;

    toDo.splice(index, 1);
    return `Removed ${itemToRemove} from your todo`;
  } //__________________________Date_______________________________
  else if (dicTate === "what day is it today?") {
    return `Today is ${date}.of ${month} ${year}`;
  } //__________________________Math_______________________________
  else if (command.startsWith("what is")) {
    const num1 = Number(item[2]);
    const operators = item[3];
    const num2 = Number(item[4]);
    return MatheMatical(num1, num2, operators);
  } //__________________________Time______________________________
  else if (command.startsWith("set a timer for")) {
    const timeInMinutes = Number(item[4]);
    setTime(timeInMinutes);
    return `Timer set for ${timeInMinutes} minutes`;
  } //__________________________MoreCommand______________________________
  else if (dicTate === "tell me a joke") {
    let randomJoke = Math.floor(Math.random() * jokes.length);
    return jokes[randomJoke];
  } //__________________________MoreCommand______________________________
  else if (dicTate === "flip a coin") {
    return Math.random() < 0.5 ? "Heads🪙" : "Tail🪙";
  }
}
// console.log(getReply("hello, my name is Abbas"));
// console.log(getReply("what is my name?"));
// console.log(getReply("add fishing to my todo"));
// console.log(getReply("add football to my todo"));
// console.log(getReply("what is on my todo"));
// console.log(getReply("remove fishing from my todo"));
// console.log(getReply("what day is it today?"));
// console.log(getReply("what is 4 plus 3"));
// console.log(getReply("what is 3 power 4"));
// console.log(getReply("set a timer for 1 minutes"));
// console.log(getReply("tell me a joke"));
// console.log(getReply("flip a coin"));
