
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE

function sum(num1, num2){
  return num1 + num2
}
let calc = sum(1,2)

console.log(calc)

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE

function greaterThanFive(number) {
  if (number > 5) {
    return true
  } else {
    return false
  }
}
let check = greaterThanFive(3)
console.log(check)

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE

function findZWords(word) {
  if (word.startsWith('z')) {
    return 'the name begins with Z'
  } else {
    return 'the name does not begin with Z'
  }
}
let check = findZWords('dot')
console.log(check)

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove(name1, love) {
  return (`${name1} loves ${love}`)
}
let love = iLove('Joseph', 'music')

console.log(love)