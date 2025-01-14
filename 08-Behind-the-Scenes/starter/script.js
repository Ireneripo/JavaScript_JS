'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable.
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable.
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}!`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     //console.log(str); // Uncaught ReferenceError: str is not defined
//     console.log(millenial); // This works because 'var' variables are NOT block scoped, they are function scoped, so we can read them outside the 'if' scope.

//     //console.log(add(2, 3)); // Uncaught ReferenceError: add is not defined (when using 'strict-mode'), because functions are block scoped. If 'strict-mode' is disabled, it works.

//     console.log(output);
//   }
//   //console.log(millenial); // Uncaught ReferenceError: millenial is not defined

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// //console.log(age); // Uncaught ReferenceError: age is not defined
// //printAge(); // Uncaught ReferenceError: printAge is not defined

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(test1);
// var test1 = 'hola'; // Using of 'var' not recommended
// console.log(test1);

// // Function declarations are hoisted and can be used before initialization
// console.log(addition(2, 3));
// function addition(a, b) {
//   return a + b;
// }
// console.log(addition(2, 3));

// // Function expressions with 'var' are undefined
// cl(addition2);
// console.log(addition2(4, 5)); // Uncaught TypeError: addition2 is not a function
// var addition2 = function (a, b) {
//   return a + b;
// };
// console.log(addition2(4, 5));

// // Function expressions with 'let' or 'const' are not hoisted
// console.log(addition3(6, 5)); // Cannot access 'addition3' before initialization
// const addition3 = function (a, b) {
//   return a + b;
// };
// console.log(addition3(6, 5));

// // Arrow functions are not hoisted
// console.log(addition4(8, 7)); // Cannot access 'addition4' before initialization
// const addition4 = (a, b) => a + b;
// console.log(addition4(8, 7));

// Example

// console.log(numProducts);
// if (!numProducts) {
//   deleteShoppingCart(); // Because of hoisting, all products have been deleted. Using 'var' is not recommended.
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // Variables declared with 'var' are visible in the 'window' object. They are a property of the window object. Not the case with 'let' and 'const'.
// var x = 1;
// console.log(x === window.x); // true
// let y = 2;
// console.log(y === window.y); // false
// const z = 3;
// console.log(z === window.z); // false

// console.log(this); // The 'this' keyword in the global scope is (or points to) the 'window' object.

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // This is called 'method' borrowing
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda'; // This property is created on the global 'window' object because we used the 'var' keyword. Using 'var' is not recommended.

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // We use an extra variable 'self' (or 'that') to which on assign 'this', and then we use that variable in the function, so we do not get 'undefined' (this is one possible solution)
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(self);
//     //   // console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial2 = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996); // As the arrow function does not have its own 'this' keyword, it searches the 'this' keyword of the parent (the arrow function inherits the 'this' keyword from the parent, in this case calcAge).
//     };

//     isMillenial2();
//   },
//   // Never use arrow functions as methods!! This can introduce bugs
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// console.log(this.firstName);
// jonas.calcAge();

// // 'arguments' keyword
// // The 'arguments' keyword is only available in regular functions.
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // The 'arguments' keyword is not available in arrow functions.
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(3, 6, 8); // Uncaught ReferenceError: arguments is not defined

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPerson(jessica1, 'Davis');
// console.log(marriedJessica);

// // const marriedJessica = jessica1;
// // marriedJessica.lastName = 'Davis';

// // console.log('Before:', jessica1);
// // console.log('After:', marriedJessica);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// // Shallow copy
// const jessicaCopy = { ...jessica };
// jessicaCopy.lastName = 'Davis';
// // console.log(jessica, jessicaCopy);

// // jessicaCopy.family.push('Mary');
// // jessicaCopy.family.push('John');

// // console.log('Before:', jessica);
// // console.log('After:', jessicaCopy);

// // Deep copy (or deep clone)
// const jessicaClone = structuredClone(jessica);
// jessicaClone.family.push('Mary');
// jessicaClone.family.push('John');

// console.log('Original:', jessica); // Logs the object with this array => ['Alice', 'Bob']
// console.log('Clone:', jessicaClone); // Logs the object with this array => ['Alice', 'Bob', 'Mary', 'Alice']
