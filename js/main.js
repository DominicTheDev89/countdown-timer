let countDownDate = new Date("Nov 12, 2023 00:00:00").getTime();
const startTime = new Date("Feb 22, 2023 22:37:00").getTime();
let now = new Date().getTime();
let timeLeft = countDownDate - now;

let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


let secCounter = setInterval(function() {

}, 1000);
