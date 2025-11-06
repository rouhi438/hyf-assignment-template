// age-ify (future age calculator) ===============================
let yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log('You will be ' + age +' years old in 2027');


// Good boy - Old boy (dog age calculator) =========================

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + "human years old in 2027");
}else{
console.log( "Your dog will be " + dogYear * 7 + " dog years old in 2027"
);
}

// House Price (A house price estimator) ===========================

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
 
// Peter House
 let peterWide = 8;
 let peterDeep = 10;
 let peterHeight = 10;
 let peteGardenSize = 100;
 let peterPaid =2500000;

 // Julia House
let juliaWide = 5;
let juliaDeep = 11;
let juliaHeight = 8;
let juliaGardenSize = 70;
let juliaPaid = 1000000;

function calcHousePrice(wide, deep, height, gardenSize){
  let volumeCalc = wide * deep * height;
  let price = volumeCalc * 2.5 * 1000 + gardenSize * 300;
  return price;
}

// Calculate Peter house price (2.500.000)

  let peterHousePrice = calcHousePrice(peterWide ,peterDeep, peterHeight, peteGardenSize);
  let amountDifference = peterPaid - peterHousePrice;

  //console.log(amountDifference);
  //console.log(peterHousePrice);

  if(peterHousePrice < peterPaid){
    console.log('Peter paid ' + amountDifference + ' too much for his House.')
  }else{
    console.log('Peter saved ' + amountDifference + ' on his House')
  }

  // Calculate Julia house price (1.000.000)

  let juliaHousePrice = calcHousePrice(juliaWide , juliaDeep, juliaHeight, juliaGardenSize);
  amountDifference = juliaPaid - juliaHousePrice;

  //console.log(juliaHousePrice);
  //console.log(amountDifference);

    if(juliaHousePrice < juliaPaid){
    console.log('Julia paid ' + amountDifference + ' too much for her House.')
  }else{
    console.log('Julia saved ' + amountDifference + ' on her House')
  }
  

  // Startup name generator ======================================

  //adjectives list
  let firstWords = [ "Fast", "Happy", "Mega", "Next", "Future",
                   "Techy", "Bold", "Cool", "Epic", "Quantum",];
  //names list  
let secondWords = [ "Systems", "Inc", "Ventures", "World", "Factory",
                  "Network", "Hub", "Group", "Tech", "Innovations",];


const randomNewName1 = Math.floor(Math.random() * 10);
const randomNewName2 = Math.floor(Math.random() * 10);

  const startupName = firstWords[randomNewName1] + '' +secondWords[randomNewName2];

  const nameLength = startupName.length;

  console.log(`Suggested name: "${startupName}" contains ${nameLength} characters.`)