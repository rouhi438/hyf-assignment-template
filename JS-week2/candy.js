
  const boughtCandyPrices = [];
function addCandy(candyType, weight){
    let pricePerGram;
    switch(candyType.toLowerCase()){
        case "sweet" :
            pricePerGram = 0.5;
            break;
        case "chocolate":
            pricePerGram = 0.7;
            break;
        case "toffee":
            pricePerGram = 1.1;
            break;
        case "chewing-gum":
            pricePerGram = 0.03; 
            break;
        default: 
            console.log("Unknown Candy Type");
            return;
    }
const totalCandyPrice = pricePerGram * weight;
boughtCandyPrices.push(totalCandyPrice);
return boughtCandyPrices
}

const amountToSpend = Math.random() * 100; // Get random budget between 0 and 100 to spend.
  function canBuyMoreCandy(){
      let totalSpent = 0;
      let i = 0
      while(i < boughtCandyPrices.length){
          totalSpent += boughtCandyPrices[i];
          i++;
        }
       return totalSpent < amountToSpend
    }
    
    console.log(addCandy('Sweet', 50))
    console.log(addCandy('Chocolate', 25))
    console.log(addCandy('Chewing-Gum', 100))
    console.log(addCandy('Toffee', 20))
    console.log(boughtCandyPrices);
    console.log(canBuyMoreCandy() ? "You can buy more, so please do!" : "Enough candy for you!" );