var readline = require('readline');

READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var crazyBubbleSort = function(arr, sortCompletionCallback) {
  var sortPassCallback = function(madeAnySwaps) {
    if (madeAnySwaps === true) {
      performSortPass(arr, 0, false, sortPassCallback)
    } else {
      sortCompletionCallback(arr);
    }
  };

  sortPassCallback(true);
}

var performSortPass = function(arr, i, madeAnySwaps, callback) {
  if (i < arr.length - 1) {
    askLessThan(arr[i], arr[i + 1], function(lessThan) {
      if (lessThan === false) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // update madeAnySwaps here?
        madeAnySwaps = true;
      }
      // was outside this func
      performSortPass(arr, i + 1, madeAnySwaps, callback);
    })
     // performSortPass was here
  } else if (i === (arr.length - 1)) {
    callback(madeAnySwaps);
  }
}

var askLessThan = function(el1, el2, callback) {
  console.log(el1 + ", " + el2)
    READER.question("Is the first number smaller?", function(userInput) {
      if (userInput === 'yes') {
        callback(true);
      } else {
        callback(false);
      }
    });
};

crazyBubbleSort([3, 2, 1], function (arr) {
  console.log(arr);
  READER.close();
});