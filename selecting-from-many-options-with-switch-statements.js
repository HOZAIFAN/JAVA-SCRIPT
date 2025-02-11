function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

// Testing the function
console.log(caseInSwitch(1)); // Output: alpha
console.log(caseInSwitch(2)); // Output: beta
console.log(caseInSwitch(3)); // Output: gamma
console.log(caseInSwitch(4)); // Output: delta
console.log(caseInSwitch(5)); // Output: (empty string)