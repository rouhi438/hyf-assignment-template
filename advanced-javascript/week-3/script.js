//--
const currencyDropDown1 = document.getElementById("currency-1");
const currencyDropDown2 = document.getElementById("currency-2");

let rates;
let active = "from";

async function getCurrencies() {
  const url = "https://open.er-api.com/v6/latest/USD";
  const response = await fetch(url);
  const data = await response.json();
  rates = data.rates;
  Object.entries(data.rates).forEach(([currency, value]) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = `${currency}`;
    currencyDropDown1.appendChild(option1);
    currencyDropDown1.value = "EUR";

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = `${currency}`;
    currencyDropDown2.appendChild(option2);
    currencyDropDown2.value = "DKK";
  });
}
getCurrencies();

//--
const inputFromValue = document.getElementById("from");
const inputToValue = document.getElementById("to");

inputFromValue.addEventListener("input", () => {
  active = "from";
  convert();
});
inputToValue.addEventListener("input", () => {
  active = "to";
  convert();
});

currencyDropDown1.addEventListener("change", convert);
currencyDropDown2.addEventListener("change", convert);

function convert() {
  const currencyFromValue = currencyDropDown1.value;
  const currencyToValue = currencyDropDown2.value;

  const fromRate = rates[currencyFromValue];
  const toRate = rates[currencyToValue];
  if (active === "from") {
    if (!inputFromValue.value) {
      inputToValue.value = "";
      return;
    }
    const currencyNumValue = Number(inputFromValue.value);

    const result = (currencyNumValue / fromRate) * toRate;
    inputToValue.value = result.toFixed(2);
  } else {
    if (!inputToValue.value) {
      inputFromValue.value = "";
      return;
    }
    const currencyNumValue = Number(inputToValue.value);

    const result = (currencyNumValue / toRate) * fromRate;
    inputFromValue.value = result.toFixed(2);
  }
}
//- swapBtn
const swapBtn = document.querySelector(".circle");
swapBtn.addEventListener("click", () => {
  const swapCurrency = currencyDropDown1.value;
  currencyDropDown1.value = currencyDropDown2.value;
  currencyDropDown2.value = swapCurrency;

  const moveInputValue = inputFromValue.value;
  inputFromValue.value = inputToValue.value;
  inputToValue.value = moveInputValue;
});
//- ratePage
const convertPageBtn = document.querySelector(".convert-btn");
const ratesPageBtn = document.querySelector(".rate-btn");
const ratePageContainer = document.querySelector(".rate-container");

ratesPageBtn.addEventListener("click", () => {
  ratesPageBtn.classList.add("active");
  convertPageBtn.classList.remove("active");
  document.querySelector(".main").classList.add("hidden");
  ratePageContainer.classList.remove("hidden");
  ratePageContainer.innerHTML = "";
  Object.entries(rates).forEach(([currency, value]) => {
    const rateDiv = document.createElement("div");
    rateDiv.className = "row";
    rateDiv.textContent = `${currency} --- ${value}`;
    ratePageContainer.appendChild(rateDiv);
  });
});
convertPageBtn.addEventListener("click", () => {
  convertPageBtn.classList.add("active");
  ratesPageBtn.classList.remove("active");
  document.querySelector(".main").classList.remove("hidden");
  ratePageContainer.classList.add("hidden");
});

//--
const timerHolder = document.querySelector(".timer");
function getTime() {
  const currentTime = new Date();

  const year = currentTime.getFullYear();
  const month = String(currentTime.getMonth() + 1).padStart(2, "0");
  const day = String(currentTime.getDate()).padStart(2, "0");

  const hour = String(currentTime.getHours()).padStart(2, "0");
  const minute = String(currentTime.getMinutes()).padStart(2, "0");
  const second = String(currentTime.getSeconds()).padStart(2, "0");

  timerHolder.textContent = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
getTime();

setInterval(getTime, 1000);
