// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!"; // No extra spaces or typos here
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

// Testing the function
console.log(golfScore(4, 7)); // Should return "Go Home!"
console.log(golfScore(5, 9)); // Should return "Go Home!"
