const getRandomNumber = require('./randomNumber');

function uuid() {
  const seed = getRandomNumber(0, 10000);
  console.log(seed);
  console.log(seed.toString(16));
}

uuid();
console.log(uuid());
