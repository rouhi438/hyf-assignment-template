// task-2 => FUNCTIONS

//nr-1
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".text").textContent = "Called after 2.5 seconds";
  }, 2500);
});

//nr-2
function loadingAfterCall(delay, stringToLog) {
  setTimeout(() => {
    console.log(`${stringToLog} loaded after ${delay} seconds!!`);
  }, delay * 1000);
}
loadingAfterCall(3, "Hello");

//nr-3

document.querySelector(".btn").addEventListener("click", () => {
  function loadingAfterDelay(delay, stringToLog) {
    setTimeout(() => {
      document.querySelector(".show").textContent =
        `${stringToLog} loaded after ${delay} seconds!!`;
      console.log(`${stringToLog} loaded after ${delay} seconds!!`);
    }, delay * 1000);
  }
  loadingAfterDelay(3, "Java Script");
});

//nr - 4;
const showEarth = function () {
  document.querySelector(".earth").textContent = "🌏 Earth 🌏";
};

const showSaturn = function () {
  document.querySelector(".saturn").textContent = "🪐 Saturn 🪐";
};

function planetLogin(planetLogFunction) {
  planetLogFunction();
}
planetLogin(showEarth);
planetLogin(showSaturn);

//nr-5
const locationBtn = document.querySelector(".location");
locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.querySelector(".lat").textContent = `Latitude : ${latitude}`;
      document.querySelector(".lon").textContent = `Longitude : ${longitude}`;
      //document.body.innerHTML = `<div>This is the Latitude : ${latitude} <br>This is the  Longitude : ${longitude}`;
    });
  } else {
    alert("Geolocation not supported");
  }
});

//nr-6. Log Location on Map
// Optional

//nr-7
const numInput = document.getElementById("num");
const result = document.getElementById("result");
const numBtn = document.getElementById("numBtn");
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}
numBtn.addEventListener("click", () => {
  const delayValue = Number(numInput.value);
  runAfterDelay(delayValue, () => {
    result.textContent = `Should be logged after ${delayValue} seconds`;
  });
});

//nr-8
const doubleBtn = document.getElementById("double-btn");
const doubleText = document.getElementById("double-text");
let lastClick = 0;
let timeOut = null;
doubleBtn.addEventListener("click", () => {
  const currentClickTime = Date.now();
  if (currentClickTime - lastClick <= 500) {
    clearTimeout(timeOut);
    doubleText.textContent = "double clicked!";
  } else {
    timeOut = setTimeout(() => {
      doubleText.textContent = "Your time is over!";
    }, 1000);
  }
  lastClick = currentClickTime;
});

// nr-9
const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke-text");

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
function logFunnyJoke() {
  jokeText.textContent = "Why don't programmers like nature? Too many bugs!😅";
}
function logBadJoke() {
  jokeText.textContent =
    "My boss told me to have a good day... so I went home!☹️";
}
jokeBtn.addEventListener("click", () => {
  const shouldTellFunnyJoke = Math.random() > 0.5;
  jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke);
});

//Task-3 => Function as a variable
//nr-1
const arrayList = [
  function () {
    console.log("function-1");
  },
  function () {
    console.log("function-2");
  },
  function () {
    console.log("function-3");
  },
];
arrayList.forEach((item) => item());

//nr-2
const myFunction = function () {
  console.log("Hello World!");
};
function newFunction() {
  console.log("Hello Everyone!");
}
myFunction();
newFunction();

//nr-3

const myObject = {
  myKey: function () {
    console.log("I'm so tired😒, because I wrote so many types of functions");
  },
};
myObject.myKey();

//-Task 4 => The fastest presser in this realm

const gameContainer = document.querySelector(".game-container");
const gameInput = document.getElementById("game-input");
const gameBtn = document.getElementById("game-btn");
const gameText = document.getElementById("game-text");

const sCounter = document.querySelector(".s-counter");
const lCounter = document.querySelector(".l-counter");

const sCanvas = document.getElementById("s-confetti");
const lCanvas = document.getElementById("l-confetti");

const sConfetti = confetti.create(sCanvas, { resize: true });
const lConfetti = confetti.create(lCanvas, { resize: true });

let sCount = 0;
let lCount = 0;
let runningFlag = false;
gameBtn.addEventListener("click", () => {
  const inputValue = Number(gameInput.value);
  sCount = 0;
  lCount = 0;
  runningFlag = true;
  gameText.textContent = `Game running for ${inputValue} seconds...`;

  setTimeout(() => {
    runningFlag = false;
    if (sCount > lCount) {
      gameText.textContent = "'S' player wins!";
      gameText.style.color = "green";
      sConfetti({ particleCount: 150, spread: 100 });
      document.querySelector(".left").classList.add("anime-style");
    } else if (lCount > sCount) {
      gameText.textContent = "'L' player wins!";
      gameText.style.color = "green";
      document.querySelector(".right").classList.add("anime-style");
      lConfetti({ particleCount: 350, spread: 250 });
    } else {
      gameText.textContent = `The game was tied!"`;
    }
  }, inputValue * 1000);
});

document.addEventListener("keydown", (event) => {
  if (!runningFlag) return;
  const key = event.key.toLowerCase();
  if (key === "s") {
    sCount++;
    sCounter.textContent = `You pressed ${sCount} times key 'S'`;
  }
  if (key === "l") {
    lCount++;
    lCounter.textContent = `You pressed ${lCount} times key 'L'`;
  }
});
