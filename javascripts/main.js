console.log("Hello JS");

//////////////////////////////////////////////////////////////////
// Loops

// Write a for loop that increments the counter variable by 10 each time, and displays the value.
for (var i = 0; i < 100; i += 10) {
  console.log("count by ten", i);
};

// Write a for loop that divides the counter variable by 2 each time, and displays the value.
for (var i = 100; i > 1; i = i / 2) {
  console.log("div by 2", i);
};

// Augment the loop to insert each new value into an array
var halfVals = [];
for (var i = 100; i > 1; i = i / 2) {
  halfVals.push(i);
};
console.log("halfVals", halfVals);


// Write a loop that starts at 100 and decrements a variable by 1. 
// If the number is even, add the number to the beginning of an array, 
// else add it to the end of the array.

var evenOdds = [];
for (var i = 100; i >= 0; i--) {
  if (i % 2 === 0) {
    evenOdds.unshift(i);
  } else {
    evenOdds.push(i);
  }
};
console.log("evenOdds with >=", evenOdds );