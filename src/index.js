import { getRandomJoke } from './jokes.js';

// rememeber to npm run build when making js changes
import confetti from 'canvas-confetti';



let jokeButton = document.querySelector("#getJoke");
let setup = document.querySelector("#setup");
let punchline = document.querySelector("#punchline");

// joke button
jokeButton.addEventListener("click", () => {
  let joke = getRandomJoke()
  let randomSetup = joke.setup
  let randomPunchline = joke.punchline
  setup.innerText = randomSetup
  punchline.innerText = randomPunchline
})


// shoot confetti when mouse over on profile pic
let profile = document.querySelector("#profilePic");
profile.addEventListener("mouseover", () => {
  confetti({
    colors: ["#9379aa", "#e8ddf0", "#4e3e5c"],
    spread: 180
  });
})

// custom confetti
let confettiButton = document.querySelector("#getConfetti");
confettiButton.addEventListener("click", () => {
  customConfetti();
})



// function that shoots confetti from left and right side of screen
function customConfetti() {

  var duration = 10 * 1000; // 10 sec duration
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  } ());
}

