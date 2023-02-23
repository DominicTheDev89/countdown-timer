
//Setting the end date equal to when I separate from the military
let countDownDate = new Date("Nov 12, 2023 00:00:00").getTime();

//Setting the start time to when I first started creating the app for an animation that I might add later
const startTime = new Date("Feb 22, 2023 22:37:00").getTime();

//Setting a variable equal to the time it is when a user visits the webpage for calculations
let now = new Date().getTime();

//These variables help to calculate the amount of time remaining on the counter
let timeLeft = countDownDate - now;

let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//Function to decrement the counter by 1 second intervals
let secCounter = setInterval(function() {

}, 1000);
