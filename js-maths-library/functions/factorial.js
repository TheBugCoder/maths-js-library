function factorial(num) {
  let numArray = [];
  let number;
  for (let i = 1; i < num + 1; i += 1) {
    numArray.push(i);
    number += `*${i}`;
  }
  return number;
}
console.log(factorial(3));
