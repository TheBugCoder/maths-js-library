// Get a random number between a minimum and a maximum value

function getRandomNumber(min, max, rounded) {
  const formula = Math.random() * (max - min) + min;
  return rounded ? Math.round(formula) : formula;
}

module.exports = getRandomNumber;
