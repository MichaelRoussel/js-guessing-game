// ==================================================
// ==================================================
/*
  !!!-- INSTRUCTIONS -- !!!
  Follow the steps closely. Marks are for correct syntax and execution.
  DO NOT remove the commenting in the file. Removing the commenting may
  lead to you receiving a grade far lower than you deserved due to the
  automation software missing your answer.
*/

/*
  !!!-- STUDENT DETAILS --!!!

  FILL IN THE FOLLOWING DETAILS:
  FIRST NAME: Michael
  LAST NAME: Roussel
  STUDENT ID: 200389510
  DATE: February 21, 2019
  
  !!!-- END OF STUDENT DETAILS --!!!
*/
// ==================================================
// ==================================================



/* Variables, Scope & Data Types */
// ==================================================
// Step 1 (3): Make the following variable globally scoped and equal to a decimal value
y = 1.5;
// Step 2 (3): Make the following variable functionally scoped and equal to an integer value
var x = 5;

// Step 3 (3): Make the following variable block scoped, mutable, and equal to an array value
let s = [1, 2, 3];

// Step 4 (3): Make the following variable block scoped, immutable, and equal to a boolean value
const d = false;

// ==================================================


/* Arrays */
// ==================================================
// Step 5 (5): Create a single dimensional array, with 3 elements, and store it in a mutable block scoped variable
let singleDimArr = [4, 5, 6];

// Step 6 (5): Create a nulti dimensional array, with 2 nested arrays, containing 2 elements each, and store it in a immutable block scoped variable
let nultiDimArr = [[7, 8], [9, 10]];

let names = ['Shaun', [['Steven', 'Derek'], 'Bob', 'Cassandra', 'Lucy'], 'Paul'];
// Step 7 (3): Access 'Bob' from the above array and store it in the following variable (you must use array indices)
let Bob = names[1][1];

// Step 8 (3): Access 'Paul' from the above array and store it in the following variable (you must use array indices)
let Paul = names[2];

// Step 9 (3): Add 'Shelley' to the end of the names array
names.push("Shelley");

// Step 10 (3): Add 'Hubert' to the beginning of the names array
names.unshift("Hubert");

const temps = [99.3, 98.7, 87.5, 76.3, 60.1];
// Step 11 (3): Remove the last number from the temps array
temps.pop();

// Step 12 (3): Remove the first number from the temps array
temps.shift();
// ==================================================


/* Loops & Array Iteration */
// ==================================================
let sum = 0;
// Step 13 (5): Using a standard for loop:
// Initialize 'i' to be 0
// If 'i' is less than 50
// Increment 'i' by 1
for (i = 0; i < 50; i++) {
  // Increment sum by 'i'
  sum += 1
}

let arrSum = 0;
let ages = [23, 56, 72, 19, 85, 89, 23, 99,90, 101];
// Step 14 (5): Using any loop structure
// Iterate over the array values and add each value to 'arrSum'
for (let age of ages) {
  arrSum += age;
}
// ==================================================


/* Library Functions */
// ==================================================
// Step 15 (2): Make the following value a proper number using a casting method
let aNumNotAStr = Number("42");

// Step 16 (2): Make the following value a proper string using a casting method
let aStrNotANum = String(42);
// ==================================================


/* Custom Functions */
// ==================================================
// Step 17 (6): Create a NAMED function called 'greeting'
// Give it 1 parameter called 'name'
// Have it output to the console 'Hello, {name}' using STRING INTERPLOATION (backticks)
function greeting (name) {
  console.log(`Hello, ${name}`)
}


// Step 18 (6): Create an ANONYMOUS function and store the definition in an immutable block variable called 'notify'
// Give it 1 parameter called 'message'
// Have it output to the console 'The message is: {message}' using STRING CONCATENATION (+)
const notify = function (message) {
  console.log('The message is: ' + message);
}


// ==================================================


/* Object Literals & Inheritance */
// ==================================================
// Step 19 (10): Create a literal object called 'Ingredient'
// a) Add an 'init' method that has 'type', 'cost', and 'quantity'
//    as parameters and assigns the passed arguments to the
//    corresponding object properties (remember 'this')
let Ingredient = {
  init: function(type, cost, quantity) {
    this.type = type;
    this.cost = cost;
    this.quantity = quantity;
  }
}




// Step 20 (15): Using object literal inheritance (Object.create())
// a) Create a new object called 'Strawberry' that inherits from
//    'Ingredient'
// b) Call 'init' on 'Strawberry' and pass the following arguments:
//    type: 'fruit', cost: 5.00, quantity: 12
// c) Create a new method (externally) on 'Strawberry' called
//    'eat' that takes no parameters and returns:
//    'Yum Yum, I love {type}!' ('type' must reference the Strawberry's 'type' property)
let Strawberry = Object.create(Ingredient);
Strawberry.init('fruit', 5.00, 12);
Strawberry.eat = function() {
  return `Yum Yum, I love ${this.type}!`
}



// ==================================================


/* Function Constructors & Inheriance */
// ==================================================
// Step 21 (10): Create an object constructor called 'Shape'
// a) Have it take 3 parameters: 'height', 'width', and 'length'
// b) Assign the parameters to object properties on 'Shape' (Remember 'this'?)
// c) Create a method on 'Shape' called 'calculateBoundingBox'. It should
//    return the following calculation (using the object's properties):
//    height * width * length
function Shape (height, width, length) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.calculateBoundingBox = function () {
    return this.height * this.width * this.length;
  }
}




// Step 22 (15): Create an object constructor called 'Cube'
// a) Have it take 3 parameters: 'height', 'width', and 'length'
// b) Using object constructor inheritance (.call() and Object.create()):
//    Have 'Cube' inherit 'Shape' (don't forget to 'call' the parent
//    and assign the 'prototype')
function Cube (height, width, length) {
  Shape.call(this, height, width, length);
}
Cube.prototype = Object.create(Shape.prototype);



// Step 23 (5): Instantiate a new 'Cube' object with any dimensions you choose
let c1 = new Cube(4,4,4);
// ==================================================


/* DOM Selectors and Properties */
// ==================================================
// Step 24 (3): Select and store the button that says: "Keep Calm and Code On"
// a) You MUST use the query selection methods taught in class (you will lose
//    marks for using any of the .getElement... methods)
let button = document.querySelector('.btn-primary');

// Step 25 (3): Change the background colour property to a colour of your choice
button.style.backgroundColor = 'green';

// Step 26 (3): Change the text to be whatever you like
button.value = 'YOINK my button now';

// Step 27 (3): Select and store ALL the lis in the ul#list element
// a) This will return a NodeList, if you use any other selection
//    method you will get an HTMLCollection which will cause you to
//    lose marks. Make sure you use the correct QUERY selection method
lis = document.querySelectorAll('ul#list > li');
// Step 28 (10): Iterate over the lis you selected in Step 27
//               and change ONLY the lis with the class 
//               '.changeMe' to have a text colour of '#f1c40f'
for (let li of lis) {
  if (li.classList.contains('changeMe')) {
    li.style.color = '#f1c40f';
  } 
}
  

// ==================================================


/* BONUS Question */
// (25): This may be amitious, but it's worth a hefty 25 points:
// ==================================================
// CHALLENGE: Create a .map() filter for any NodeList that works the same
// as Array.prototype.map()
// 1) It MUST return a NodeList (not an array)
// 2) It MUST function EXACTLY the same way that the Array.prototype.map does
// 3) It MUST be a method on the NodeList.prototype as it should be able
//    to be run on ANY NodeList inherited object
//    
// HINT: The NodeList.prototype.filter we did in class would be a FANTASTIC
//       template to use to complete this challenge
// ==================================================
NodeList.prototype.map = function(callback) {
  for (let node of this) {
    callback(node)
    }
  return this;
}
nums = document.querySelectorAll('#nums > li');
