// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined; // Exit the function if a or b is less than 0
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2)); // Expected output: 16
console.log(abTest(-1, 2)); // Expected output: undefined
console.log(abTest(2, -1)); // Expected output: undefined
