// Complete the variadricAverage function so that it can take any number 
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.

function average(numbers) {
  
  return variadricAverage.apply();

  console.log('The average is: ' + average());
};


function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0 , sum = 0 , n = arguments.length; i < n; i++) {
    sum += arguments[i];
  } 
  console.log('The average is: ' + sum/n );
};