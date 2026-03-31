let timeLeft = ; 

const countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown); // Stop the timer
    console.log("Time's up!");
  } else {
    console.log(timeLeft + " seconds remaining");
    timeLeft--;
  }
}, 1000); // Runs every 1000ms (1 second)