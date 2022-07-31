import { getRandomJoke, getRandomJokes } from './jokes.js';



let jokeButton = document.querySelector("#getJoke");
let setup = document.querySelector("#setup");
let punchline = document.querySelector("#punchline");


jokeButton.addEventListener("click", () => {
  let joke = getRandomJoke()
  let randomSetup = joke.setup
  let randomPunchline = joke.punchline
  setup.innerText = randomSetup
  punchline.innerText = randomPunchline
})


//export { randomJoke, randomJokes };
