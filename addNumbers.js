var readline = require('readline');

READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    READER.question("Next number to add:", function(numberInput) {
      var number = parseInt(numberInput);
      numsLeft--;
      sum += number;
      console.log(sum);

      addNumbers(sum, numsLeft, completionCallback);
    })
  } else {
      completionCallback(sum);
    }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  READER.close()
});