import jokes from './jokes.json' assert { type: "json"};



const MAX_JOKE_COUNT = 50;


// get random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// returns a random joke from the json file
const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * getRandomInt(0, 388));
  return jokes[randomIndex];
}

// returns a number of random jokes (specified by argument)
const getRandomJokes = (numberOfJokes = 1) => {
  if (numberOfJokes <= 0) {
    throw new Error('Number of jokes must be greater than 0');
  }
  const randomJokes = [];
  const fetchJokes = (count) => {
    for (let i = 0; i < count; i++) {
      randomJokes.push(getRandomJoke());
    }
    return randomJokes;
  }

  if (numberOfJokes > MAX_JOKE_COUNT) {
    return fetchJokes(MAX_JOKE_COUNT);
  }
  return fetchJokes(numberOfJokes);
}


export { getRandomJoke, getRandomJokes };