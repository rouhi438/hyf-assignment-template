let items = [];
let userName = null;

function nameReply(commandText) {
  if (commandText.startsWith("hello, my name is")) {
    const index = items.indexOf("is") + 1;
    userName = items[index];
    return `Hi, Nice to meet you ${userName}`;
  } else if (commandText === "what is my name?") {
    return userName ? `Your name is ${userName}` : "I don't know your name";
  }
}

const todo = ["Learn JavaScript", "Meet the mentors"];
function todoReply(commandText) {
  if (commandText.startsWith("add") && commandText.endsWith("to my todo")) {
    const itemToAdd = items.slice(1, items.length - 3).join(" ");
    todo.push(itemToAdd);
    return `Added ${itemToAdd} to your todo`;
  }
  if (commandText === "what is on my todo") {
    if (todo.length === 0) return "Your todo is empty";
    return `You have ${todo.length} todos - ${todo.join(", ")}`;
  }
  if (
    commandText.startsWith("remove") &&
    commandText.endsWith("from my todo")
  ) {
    const itemToRemove = commandText
      .replace("remove", "")
      .replace("from my todo", "")
      .trim();
    const index = todo.indexOf(itemToRemove);
    if (index === -1) return `${itemToRemove} is not in your todo`;

    todo.splice(index, 1);
    return `Removed ${itemToRemove} from your todo`;
  }
}

function dateReply(commandText) {
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
  if (commandText === "what day is it today?") {
    return `Today is ${date}.of ${month} ${year}`;
  }
}

function compute(num1, operators, num2) {
  if (operators === "+" || operators === "plus") return num1 + num2;
  if (operators === "*" || operators === "times") return num1 * num2;
  if (operators === "-" || operators === "minus") return num1 - num2;
  if (operators === "/" || operators === "divided") return num1 / num2;
  if (operators === "**" || operators === "power") return num1 ** num2;
  return "I can not calculate that.";
}
function numReply(commandText) {
  if (commandText.startsWith("calculate")) {
    const num1 = Number(items[1]);
    const operators = items[2];
    const num2 = Number(items[3]);
    return compute(num1, operators, num2);
  }
}

function startTimer(minutes) {
  const waitTime = minutes * 60 * 1000;
  setTimeout(() => {
    console.log("Timer done...");
  }, waitTime);
}
function timeReply(commandText) {
  if (commandText.startsWith("set a timer for")) {
    const timeInMinutes = Number(items[4]);
    startTimer(timeInMinutes);
    return `Timer set for ${timeInMinutes} minutes`;
  }
}

function jokeReply(commandText) {
  const jokes = [
    "What's the smartest insect? A spelling bee!😅",
    "What is fast, loud and crunchy? A rocket chip.😜",
    "How does the ocean say hi? It waves!😎",
  ];
  if (commandText === "tell me a joke") {
    let randomJoke = Math.floor(Math.random() * jokes.length);
    return jokes[randomJoke];
  }
}

function coinReply(commandText) {
  if (commandText === "flip a coin") {
    return Math.random() < 0.5 ? "Heads🪙" : "Tail🪙";
  }
}
//============

function getReply(command) {
  const commandText = command.toLowerCase();
  items = commandText.split(" ");
  return (
    nameReply(commandText) ||
    numReply(commandText) ||
    timeReply(commandText) ||
    todoReply(commandText) ||
    dateReply(commandText) ||
    jokeReply(commandText) ||
    coinReply(commandText) ||
    "Sorry, i didn't understand that."
  );
}

// console.log(getReply("hello, my name is Abbas"));
// console.log(getReply("what is my name?"));
// console.log(getReply("add fishing to my todo"));
// console.log(getReply("add football to my todo"));
// console.log(getReply("what is on my todo"));
// console.log(getReply("remove fishing from my todo"));
// console.log(getReply("what is on my todo"));
// console.log(getReply("what day is it today?"));
// console.log(getReply("calculate 4 plus 3"));
// console.log(getReply("calculate 3 ** 4"));
// console.log(getReply("set a timer for 1 minutes"));
// console.log(getReply("tell me a joke"));
// console.log(getReply("flip a coin"));
