// let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// /*let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);*/

// // Variable name conventions => This is a comment and will be ingnored by JavaScript
// let jonas_matilda = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder"; // descriptive variable names ✅
// let myCurrentJob = "Teacher"; // descriptive variable names ✅

// let job1 = "programmer"; // not descriptive variable names 🚫
// let job2 = "teacher"; // not descriptive variable names 🚫

// console.log(myFirstJob);
// console.log(myCurrentJob);

// let javascritpIsFun = true;
// console.log(javascritpIsFun);

// console.log(typeof javascritpIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascritpIsFun = "YES";
// console.log(javascritpIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job = "programmer";
// var job = "programmer";
// job = "teacher";
// console.log(job);

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--; // x = x - 1 = 99
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // <, >, <=, >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(now - 1991 > now - 2918);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2918);
// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge);

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = massMark / (heightMark * heightMark);
// const bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(bmiJohn);
// console.log(bmiMark);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(
//   `The ${job}'s name is ${firstName} ${lastName} and he was born in ${birthYear}.`
// );
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
//   multiple \n\
//   lines"
// );

// console.log(
//   `String with
//   multiple
//   lines`
// );

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sara can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sara is too young. Wait another ${yearsLeft} years to start driving license.`
//   );
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(`Century: ${century}`);

// // Type conversion
// const inputYear = "1991";
// const modifiedYear = Number(inputYear);
// console.log(inputYear, modifiedYear);
// console.log(typeof modifiedYear);
// console.log(inputYear + 18);
// console.log(modifiedYear + 18);
// console.log(Number("Iren")); // returns NaN
// console.log(typeof NaN); // returns number (but it's an invalid number => NaN)
// console.log(String(23));
// console.log(typeof String(23));

// const christmasDay = 25;
// console.log(christmasDay.toString());
// console.log(typeof christmasDay.toString());

// // Type coercion
// console.log("I am " + 23 + " years old."); // 23 is automatically convertd to a string by JavaScript.
// console.log("23" - "10" - 3); // 10
// console.log("23" + "10" - 3); // 2307
// console.log("23" + "10" + 3); // 23103
// console.log("23" * "2"); // 46
// console.log("23" * 2); // 46
// console.log("23" / "2"); // 11.5
// console.log("23" / 2); // 11.5

// let n = "1" + 1; // "11" (string)
// n = n - 1; // 10 (number)
// console.log(n); // 10 (number)

// // 5 Falsy values (0, "", undefined, null and NaN)
// // 'Falsy' values are not exactly false, but they will become false once we try to convert them to a boolean. Everything else are 'truthy' values.
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all 😊");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("Yay!! Height is defined!");
// } else {
//   console.log("height is UNDEFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult! 😊 (strict)");
// if (age == 18) console.log("You just became an adult! 😊 (loose)");

// const favourite = prompt("What's your favourite number?"); // Similar to alert(), but with an input space to submit an answer.
// console.log(favourite);
// console.log(typeof favourite);
// console.log(Number(favourite));

// if (favourite === 10) {
//   console.log("Cool! 10 is an amazing number 😊");
// } else if (favourite == 7) {
//   console.log("7 is also a cool number 👍🏻");
// } else {
//   console.log("Number is not 10 or 7");
// }

// if (favourite !== 10) {
//   console.log("Your number is not 10");
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// console.log(shouldDrive);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sara is able to drive!");
// // } else {
// //   console.log("Someone else should drive.");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sara is able to drive!");
// } else {
//   console.log("Someone else should drive.");
// }

// const day = "monday";
// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan my course structure");
//     console.log("Go to coding meetup!");
//   // break;
//   case "tuesday":
//     console.log("Prepare theory videos.");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples.");
//     break;
//   case "friday":
//     console.log("Record videos.");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend 😊");
//     break;
//   default:
//     console.log("This is executed when all the other cases fail 🥺");
// }

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "Jonas";
// console.log(`I'm ${2037 - 1991} years old ${me}.`);

// // Ternary operator
// const age = 13;
// // age >= 18
// //   ? console.log("I like to drink wine 🍷")
// //   : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(`I like to drink ${drink}`);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(`I like to drink ${drink2}`);
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
