// Data Types define the type of values that a variable can hold.

//Number: Represent numeric values, positive or negatives including integers, floating-point numbers
//Example:
var myFavNumber = 9
console.log("My favourite number is:" +myFavNumber)

//String: Represent a sequnce of characters enclosed in single or double quotes
//Example:
var my_firstSchool = 'AKP'
console.log("My first favourite school is: " +my_firstSchool)


//Boolean: Represents a logical entity with two values- true or false
//Example:
var isSunny = false
var isRaining = true

console.log(isSunny)
console.log(isRaining)

//Undefined: Represents the absence of a value or an uninitiated variable
//Example:
var myVar 
console.log(myVar)

//Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
//Example:
var myNullVal= null
console.log(myNullVal)

/*Null: Imagine an empty toy box
//Explanation: Think of a variable as a toy box, if it is null it means there is no toy in it
if we say undefined it means having a box which is not openned yet

//Other example: if you have an empty lunchbox it means you did not put anything in it but if you have a closed lunchbox(undefined) it means you haven't checked yet or filled it.

*/

//Convert a string to a number
var myStr = "10"
console.log("my number is " +myStr)
console.log(typeof myStr)
console.log(typeof +myStr)

// - sign will perform mathmatic operation by doing implicit conversion of sting.
let sum = "5" - 5
console.log(sum)

// + sign will concatenate the values rather than performing mathmatics operations
console.log("10" + 5)
console.log(9 - "5")
console.log("Rakhi " - "Tyagi")
console.log(true + true)
console.log(false + true)
console.log(false - true)
