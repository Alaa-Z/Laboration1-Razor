// variables for hands
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Call the function every second 
var addClock = setInterval(function showClock() {
    // Get the current time 
    const now = new Date();
   
    // Get seconds 
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegrees = seconds *6;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get minutes 
    const minutes = now.getMinutes();
    // console.log(minutes)
    const minutesDegrees = minutes * 6;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Get hour
    const hour = now.getHours();
    // console.log(hour);
    const hourDegrees = hour * 30 + minutes / 2;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  },1000);

