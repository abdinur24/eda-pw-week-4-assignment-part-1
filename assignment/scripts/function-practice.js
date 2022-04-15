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
function helloName( name ) {
  return 'Hello, Abdishakur';
}
// Remember to call the function to test
console.log('Should return "Hello, Abdishakur"', helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Running addNumber with actual numbers', addNumbers(24,7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  let answer = num0 * num1 * num2;
  return answer;
}
console.log('Running multiplyThree', multiplyThree(5, 2, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  if (number <= 0)
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
isPositive(3);
console.log( 'isPositive - should say true', isPositive(3) );
isPositive(0);
console.log( 'isPositive - should say false', isPositive(0) );
isPositive(-3)
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let a1 = [1, 2, 3];
function getLast( array ) {
array = a1.length
return array;
}
console.log('Last item is', getLast());
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let a2 = [ 'bike', 'bus', 'truck', 'car']; 
function find( value, array){
  array = a2
  for(value of a2){
    if(value === 'car'){
      return true;
    } else { 
    }
  }
  return false;
}
console.log('Calling funtion find', find());

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  string = string.charAt(0)
  if(letter === string.charAt(0)){
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let a3 = [2, 4, 5, 5, 2, 4];
function sumAll(a3) {
  let sum = 0
  for(i = 0; i < a3.length; i++){
    sum += a3[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log('Calling sum of a3', sumAll(a3));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
