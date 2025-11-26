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
//============
function getReply(command) {
  const item = command.split(" ");
  if (command.toLowerCase().includes("my name is")) {
    const index = item.indexOf("is") + 1;
    userName = item[index];
    return `Hi, Nice to meet you ${userName}`;
  } else if (command.toLowerCase() === "what is my name?") {
    return userName ? `Your name is ${userName}` : "I don't know your name";
  } else if (command.toLowerCase() === "add fishing to my todo") {
    return "Fishing added to your todo";
  } else if (command.toLowerCase() === "remove fishing from my todo") {
    return "Removed fishing from your todo";
  } else if (command.toLowerCase() === "what is on my todo?") {
    return "You have 2 todos - fishing and singing in the shower";
  } else if (command.toLowerCase() === "what day is it today?") {
    return `Today is ${date}.of ${month} ${year}`;
  } else if (command.startsWith("what is")) {
    const num1 = Number(item[2]);
    const operators = item[3];
    const num2 = Number(item[4]);
    if (operators === "+" || operators === "plus") return num1 + num2;
    if (operators === "*" || operators === "times") return num1 * num2;
    if (operators === "-" || operators === "minus") return num1 - num2;
    if (operators === "/" || operators === "divided") return num1 / num2;
    if (operators === "**" || operators === "power") return num1 ** num2;
    return "I can not calculate that.";
  } else if (command.startsWith("set a timer for")) {
    const time = Number(item[4]);
    setTime(time);
    return `Timer set for ${time} minutes`;
  } else if (command.toLowerCase() === "tell me a joke") {
    let randomJoke = Math.floor(Math.random() * jokes.length);
    return jokes[randomJoke];
  } else if (command.toLowerCase() === "flip a coin") {
    return Math.random() < 0.5 ? "Heads🪙" : "Tail🪙";
  }
}

//===== time function =======
function setTime(time) {
  let waitTime = time * 60 * 1000;
  setTimeout(() => {
    console.log("Timer done...");
  }, waitTime);
}

// console.log(getReply("Hello, my name is kevin"));
// console.log(getReply("What is my name?"));
// console.log(getReply("Add fishing to my todo"));
// console.log(getReply("remove fishing from my todo"));
// console.log(getReply("what is on my todo?"));
// console.log(getReply("what day is it today?"));
// console.log(getReply("what is 4 plus 3"));
// console.log(getReply("what is 3 power 4"));
// console.log(getReply("set a timer for 2 minutes"));
// console.log(getReply("Tell me a joke"));
// console.log(getReply("Flip a coin"));
