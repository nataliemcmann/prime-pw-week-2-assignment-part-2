// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to the string 'Dane'.
// Then we have a conditional statement that checks if name is the string 'Mary'
// If name is 'Mary', the we console.log 'Hi, Mary'.
// If name is not 'Mary', we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret with no assigned value. We create a variable called code
// and set it to the number 123. Then we check whether code is equal to 123 or greater than 
// the number 250. If code is 123, then the string 'super' is assigned to the variable secret,
// and the current value of code is multiplied by two. If code is greater than 250, then the 
// string 'duper' is assigned to the variable secret and nothing happens to code. 
// Then, we console.log secret, which should be 'super' because code is 123.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variable isStudent and set it equal to boolean true. We create the variable age
// and set it to number 34. We create the variable zip and set it to number 55407. The we check 
// if both isStudent is true and zip is greater than 80000. If both these condition are true,
// then we console.log 'You're a student on the West Coast!'. If not, then we check if isStudent is false
// or age is less than 30, which is if one of these statements true, console logs 'What are your hobbies?'.
// If neither of the compound conditional statements are true, then we check is isStudent is true
// and if so, we console log 'Welcome to Prime'. If none of the conditional statements are met, 
// then we console log 'How about the weather?' 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX -instructions ask to set both colorOne and colorTwo to 'purple'. As written, 
//only colorOne is reassigned.
// should add colorTwo = 'purple'; below the code reassigning colorOne

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


/*
let temp = 40;

// Fix - 1) the instructions imply that time can be values other than 4
//but the time variable is currently declared with const, which means the value of time
//cannot be changed.
// Solution 1) should be let time = 4;
const time = 4;

//Fix - 2) the instructions as for temp AND time values to be checked, but as written,
// temp OR time values are checked.
// Solution 2) should be (temp > 39 && time >=4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.



/*
let age = 21;
const minAge = 21;

//FIX - 1) as written, the if...else statement appears reversed compared to what to the 
// instructions declare
// should be if (age >= minAge) {
//              console.log('enter'); 
//              } else {
//              console.log('no entry');  
//               }
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

