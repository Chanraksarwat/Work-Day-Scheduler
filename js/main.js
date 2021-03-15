const currentDate = document.getElementById("current-day");

//Instantiate a moment object
var nowMoment = moment();

//Display value of moment object in #currentDay
currentDate.innerHTML = nowMoment.format('dddd, MMM Do YYYY');

// Listen for a click event 
