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
