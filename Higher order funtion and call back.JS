// Function to double each number in the array
double = (x) => {
    // Map over the array and multiply each element by 2
    newlist2 = newlist.map(num => num * 2);
    return newlist2;  // Return the array with doubled numbers
};

// Function to sum all the numbers in the array
add = (z) => {
    // Use reduce to sum all elements in the doubled_numbers array
    sum1 = doubled_numbers.reduce((sum1, num) => sum1 + num, 0);
    return sum1;  // Return the total sum of doubled numbers
};

// Higher-order function to apply two operations on an array of numbers
applyoperations = (numbers, fun1, fun2) => {
    // Split the input string into an array of numbers, then convert to integers
    newlist = numbers.split(" ").map(num => parseInt(num));

    // Apply the second function (double) to the array
    doubled_numbers = fun2(newlist);

    // Apply the first function (add) to the doubled array and return the result
    return fun1(doubled_numbers);
};

// Prompt the user to enter numbers separated by spaces
numbers = prompt("Enter the numbers separated by space:");

// Call the applyOperations function, passing add and double as callback functions
console.log(applyoperations(numbers, add, double));
