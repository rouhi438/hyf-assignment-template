
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function notThisFunctionName(travelInformation){
  const {speed , destinationDistance} = travelInformation;
  const time = destinationDistance / speed;
  const hour = Math.floor(time);
  const minutes = Math.floor((time - hour) * 60);

//return hour + "hours and "+ minutes + " minutes";
  return `${hour} hours and ${minutes} minutes`
}

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime);

