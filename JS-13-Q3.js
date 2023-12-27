// ? Question-3: follow these steps:
// todo-1: Write a function that receives an array of numbers
// todo-2: In The function that you created in todo-1, you should create two functions.
// todo-3: the first function displays the first half of the array, and the second function displays the second half of the array..

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*=> output
   [ 1, 2, 3, 4, 5 ]
   [ 6, 7, 8, 9, 10 ]
 */

// !Answer:



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayHalves(arr) {
  function displayFirstHalf() {
    console.log(arr.slice(0, arr.length / 2));
  }

  function displaySecondHalf() {
    console.log(arr.slice(arr.length / 2));
  }

  displayFirstHalf();
  displaySecondHalf();
}

displayHalves(numbers);

