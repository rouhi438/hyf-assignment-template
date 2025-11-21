//==== create function to add Activity
const activities = [];
function addActivity(date, activity, duration){
    activities.push({date: date, activity: activity, duration: duration});


 }
addActivity("23/7-18", "Youtube", 30); 
addActivity("23/7-18", "Instagram", 20); 
addActivity("24/7-18", "Game", 25); 
addActivity("24/7-18", "NetFlix",45); 


console.log(activities);
//===== creating function to control and remined the more or empty activity
 function showStatus(activities){

if(activities.length === 0){
    return "Add some activities before calling showStatus";
}
let totalTime = 0;
const limitTime = 50;
activities.forEach(element =>totalTime += element.duration);

let maxActivity = activities[0];

 activities.forEach(element => {
    if(element.duration > maxActivity.duration){
      maxActivity = element;
}   
});

if(totalTime >= limitTime){
    return `You have reached your limit(+50 min), no more smartPhoning for you! 
The activity taking the most time is "${maxActivity.activity}"on ${maxActivity.date} with ${maxActivity.duration} min.`;
}else{
    return "Add some activities before calling showStatus";
}

}
    console.log(showStatus(activities));