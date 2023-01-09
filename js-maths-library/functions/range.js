// Returns an array with all numbers between a minimum and maximum value
function range(min, max, step = 1) {
  const rangeArray = [];
  for (let i = min; i < max + 1; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}

module.exports = range;
