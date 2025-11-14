// Weather wear function
function clothesToWear(temp){
    if(temp > 20){
       return "Shorts";
    }
    else if(temp > 15 ){
        return "T-shirt"
    } 
    else if(temp > 5){
        return "Sweater";
    } 
    else if(temp  > 0){
        return "Jacket";
    } 
    else {
        return "WinterCoat"
    }
} console.log(clothesToWear(-10)) // Logs: "WinterCoat"
console.log(clothesToWear(6));  // Logs: "Sweater"
console.log(clothesToWear(18)); // Logs: "T-shirt"