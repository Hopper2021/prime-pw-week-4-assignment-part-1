console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  let name = 'Jessica'
  return name;
}
// Remember to call the function to test
console.log( 'Hello,', helloName(), '!' );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log( addNumbers( 9,6 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let answer = num0 * num1 * num2;
  return answer;
}
console.log( multiplyThree( 1, 2, 3 ) );


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
  let lastItem = array[array.length - 1];

  if ( lastItem ){
  return lastItem;
} else ( array.length < 0 )
  return;
}
console.log( 'The last item in the array is:', getLast(['First', 'Second', 'Last']) );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for ( let i=0; i<array.length; i++ ){

    if ( value === array[i] ){
      console.log( 'What did we find:', array[i] ); // Checking the output value
      return true;
    }
  } return false;
}
 console.log( 'Return true if keys are found:', find( 'keys', ['lint roller', 'phone charger', 'keys', 'shoes I lost a while ago'] ) );
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i=0; i<string.length; i++ ){
    if ( string.charAt(0) === letter ){
      return true;
    }
  } return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( numbers ) {
  let sum = 0
  // TODO: loop to add items
  for ( let i=0; i<numbers.length; i++ )
  sum += numbers[i];
  return sum;
}
console.log( 'The sum of all the numbers in this array is: ', sumAll( [6, 3, 10, 15, 2] ) );
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let array = [];

function positiveNums( array ){
    let result = array.filter( number => number > -1 );
    return result;
  }

 console.log( 'The positive numbers in the array are:', positiveNums( [-2, 4, -107, 56, -24, -9, 1] ) );

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
