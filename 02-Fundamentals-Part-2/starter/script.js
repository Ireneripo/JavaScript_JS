"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!");

// // const interface = "Audio";
// // const private = 543;

// function logger() {
//   console.log("My name is Jonas");
// }

// // Calling/Running/Invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // Parameters get defined once the function is called
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0); // 5 and 0 here are arguments. They are the parameters with an actual value, the parameters when we actually define them.
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
// console.log(num);

// // Function declaration => It uses the keyword 'function' but it does NOT store it in a variable. They CAN be called before we define the function.
// const age1 = calcAge1(1991);
// function calcAge1(birthYear) {
//   // const age = 2037 - birthYear;
//   // return age;
//   return 2037 - birthYear;
// }

// console.log(age1);

// // Function expression => It uses the keyword 'function' but it DOES store it in a variable. They CANNOT be called before we define the function.

// // const age2 = calcAge2(2005); // Error: Uncaught ReferenceError: Cannot access 'calcAge2' before initialization. 🥺 See 'hoisting'.

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2005); // Here we call the function AFTER we have defined it. It works!! 😊
// console.log(age2);

// // Arrow functions
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const calcAge3 = (birthYear) => {
//   return 2037 - birthYear;
// };
// const age3 = calcAge3(1998);
// console.log(age3);

// // If our function has one line we can ommit the curly braces {} and the word 'return (this is called implicit return).
// const calcAge4 = (birthYear) => 2037 - birthYear;
// const age4 = calcAge4(1999);
// console.log(age4);

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} has to wait ${retirement} years until retirement.`;
// };
// console.log(yearsUntillRetirement(1992, "Jonas"));
// console.log(yearsUntillRetirement(1982, "Irene"));

// // Functions that call another function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Functions Review
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(
//       `${firstName} has to wait ${retirement} years until retirement.`
//     );
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired! 😊`);
//     return -1;
//   }

//   // return `${firstName} has to wait ${retirement} years until retirement.`;
// };
// console.log(yearsUntillRetirement(1991, "Jonas"));
// console.log(yearsUntillRetirement(1982, "Irene"));
// console.log(yearsUntillRetirement(1950, "Mike"));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
//
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
//
// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"]; // Error: Assignment to constant variable
//
// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);
//
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);
//
// // Excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
//
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// // Add elements to an array
// const friends = ["Michael", "Steven", "Peter"];
// const newLenght = friends.push("Jay"); // Adds an element to the end of the array and returns the length of the array
// console.log(friends);
// console.log(newLenght);
//
// friends.unshift("John"); // Adds an element to the beginning of the array and returns the length of the array
// console.log(friends);
//
// // Remove elements from the array
// friends.pop();
// const popped = friends.pop(); // Removes the last element from an array and returns the removed element
// console.log(popped);
// console.log(friends);
//
// friends.shift(); // Removes the first element of the array
// console.log(friends);
//
// console.log(friends.indexOf("Steven")); // Returns the index of a specific element in the array
// console.log(friends.indexOf("Bob")); // If the element is not present, it returns -1
//
// friends.push(23);
// console.log(friends.includes("Steven")); // Returns true or false if the element is present in the array
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23")); // Returns false because the '.includes' method checks a strict equality (type and value). Here we pushed the number 23 and we are checking for the string "23", so it's false.
// console.log(friends.includes(23)); // Returns true because we are testing for the number 23 instead of the string "23"
//
// if(friends.includes('Steven')) {
//   console.log("You have a friend called Steven");
// }

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//   // let tip;
//   // if(bill >= 50 && bill <= 300 ) {
//   //   tip = bill * 0.15;
//   // } else {
//   //   tip = bill * 0.20;
//   // }
//   // return tip;
// }
// console.log(calcTip(100));
// const bills = [125, 555, 44];
// console.log(bills)
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips)
// const totals =[bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]
// }
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);
//
// // How to retrieve data in an object
// console.log(jonas.lastName); // Dot notation
// console.log(jonas["lastName"]); // Bracket notation
//
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
//
// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );
// console.log(jonas.interestedIn); // We get 'undefined' here because we are trying tu access a property that does not exist
// console.log(jonas[interestedIn]); // With bracket notation we can access the value we are looking for because 'interestedIn' is an expression, and it will be evaluated and the result of the expression will be the name of the property we enter to the prompt (in our case 'job'). Inside the brackets we can put any expression.
//
// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }
//
// // How to add new properties to an object?
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);
//
// // Challenge
// // "Jonas has three friends, and his best friend is called Michael."
//
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`);

// // We can add functions as 'values' in a key/value pair within an object
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // Any function that is attached to an object is called a 'method' 👇🏻
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // In every method, JavaScript gives us access to a special variable called "this"
//   // calcAge: function () {
//   //   // console.log(this)
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     // console.log(this)
//     // Here we use the "this" keyword with the dot notation to create a new property called "age"
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a/no driver's license."
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
//
// // We can access the 'calcAge' function the same way we access other properties within the object, with dot notation or the bracket notation
// //console.log(jonas.calcAge(1991)); //Resolves to 46 and it's shown in the console
// //console.log(jonas["calcAge"](1991)); //Resolves to 46 and it's shown in the console
//
// //console.log(jonas.calcAge(jonas.birthYear)); //Resolves to 46 and it's shown in the console
// //console.log(jonas["calcAge"](jonas["birthYear"])); //Resolves to 46 and it's shown in the console
//
// // In every method, JavaScript gives us access to a special variable called "this". The "this" variable (or keyword) is equal to the object in which the method is called (or the object that is calling the method, in our case 'jonas')
// // We calculate the age once 👇🏻
// //console.log(jonas.calcAge());
// // Then we can retrieve the newly created 'age' property using dot notation 👇🏻
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a/no driver's license."
// console.log(jonas.getSummary());
//
// // Function expressions are the same as if we wrote the function using the name of the function as the property (key) and the rest of the function as the value of the key/value pair within an object
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// // Challenge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   },
// };
// console.log(mark.calcBMI());
//
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   },
// };
// console.log(john.calcBMI());
// console.log(
//   `${mark.fullName}'s BMI (${mark.calcBMI().toFixed(2)}) is higher than ${
//     john.fullName
//   }'s (${john.calcBMI().toFixed(2)})!`
// );

// The 'for' loop
// console.log("Lifting weights repetition 1 🏋🏻‍♀️");
// console.log("Lifting weights repetition 2 🏋🏻‍♀️");
// console.log("Lifting weights repetition 3 🏋🏻‍♀️");
// console.log("Lifting weights repetition 4 🏋🏻‍♀️");
// console.log("Lifting weights repetition 5 🏋🏻‍♀️");
// console.log("Lifting weights repetition 6 🏋🏻‍♀️");
// console.log("Lifting weights repetition 7 🏋🏻‍♀️");
// console.log("Lifting weights repetition 8 🏋🏻‍♀️");
// console.log("Lifting weights repetition 9 🏋🏻‍♀️");
// console.log("Lifting weights repetition 10 🏋🏻‍♀️");

// // for loop keeps running while condition is 'true'
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }

// // Looping Arrays, Breaking and Continuing
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // Creating types array
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];

//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and Break statements in for loops
// // Continue helps us exit the current iteration of the loop and continue to the next one

// console.log("--- ONLY STRINGS ---");

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i]);
// }

// // Break is used to compleatly terminate the whole loop
// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i]);
// }

// // Looping backwards and Loops in Loops
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // Looping backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// // A loop inside a loop
// for (let excercise = 1; excercise <= 3; excercise++) {
//   console.log(`Starting exercise ${excercise} 🏋🏻‍♀️`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Excercise ${excercise}: repetition ${rep} 💪🏻`);
//   }
// }

// // The While loop
// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`FOR: Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// // }

// // While is more suitable for cases in which we have to repeat an action but we don't need a counter. When we actually know how many times the loop will run, that means we need a counter. In that cas a for loop would be more convenient
// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} 💪🏻`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

// // Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let bill = 0; bill < bills.length; bill++) {
//   let tip = calcTip(bills[bill]);
//   tips.push(tip);

//   let total = bills[bill] + tip;
//   totals.push(total);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage(bills));
