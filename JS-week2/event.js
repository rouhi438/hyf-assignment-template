
const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getEventWeekday(daysFromToday){
    const date = new Date();

    const futureDate = new Date();
    futureDate.setDate(date.getDate() + daysFromToday);  //set the future date with (current date + days from today)

    const weekIndex = futureDate.getDay(); 
    const weekday = daysOfWeek[weekIndex]; 

    const day = futureDate.getDate();
    const month = futureDate.getMonth() + 1; // + 1 , because month starts from 0
    const year = futureDate.getFullYear();
   


    return ("The event is on "+
        `${weekday}, ${day}/${month}/${year}`
    )
    
}
console.log(getEventWeekday(4))

