// Sleep Debt Calculator 

function getSleepHours(day) {
    let hours = 0;
    switch (day) {
        case "monday":
            hours = 7;
            break;
        case "tuesday":
            hours = 8;
            break;
        case "wednesday":
            hours = 9;
            break;
        case "thursday":
            hours = 5;
            break;
        case "friday":
            hours = 6;
            break;
        case "saturday":
            hours = 10;
            break;
        case "sunday":
            hours = 8;
            break;
    }
    return hours;
}
  
const getActualSleepHours = () => (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
);
  
function getIdealSleepHours() {
    let idealHours = 9;
    return idealHours * 7;
}
  
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours == idealSleepHours) {
        console.log("perfect amount of sleep");
        console.log("Sleep deficit: 0");
    } else if (actualSleepHours >= idealSleepHours) {
        console.log("you got more than enough sleep");
        console.log("Sleep surplus: " + (actualSleepHours - idealSleepHours));
    } else if (actualSleepHours < idealSleepHours) {
        console.log("you should sleep more");
        console.log("Sleep deficit: " + (idealSleepHours - actualSleepHours));
    }
}
  
  calculateSleepDebt();