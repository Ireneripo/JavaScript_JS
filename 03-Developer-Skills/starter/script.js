// Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const xyzabc = 23;

// const calcAge = (birthYear) => 2037 - birthYear;
// // console.log(xyzabc);

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return max - min;
// };

// // console.log(calcTempAmplitude([3, 6, 24, 15, 12, -9, -24, 32, 45, "error", 8]));
// const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// // =============================
// const t1 = [8, 9, -2, 18, 26, "error", 5, -7];
// const t2 = [6, 4, 21, -9, "error", 6, 31];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const mergedTempsArr = t1.concat(t2);
//   console.log(mergedTempsArr);

//   let max = mergedTempsArr[0];
//   let min = mergedTempsArr[0];

//   for (let i = 0; i < mergedTempsArr.length; i++) {
//     const currentTemp = mergedTempsArr[i];
//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }

//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(t1, t2);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) Fix the bug
//     //value: Number(prompt("Degrees celsius:")), // The prompt method always returns a string

//     value: 10,
//   };

//   // B) Find the bug
//   console.log(measurement);
//   console.table(measurement);

//   // console.log(typeof measurement.value);
//   // console.warn(typeof measurement.value);
//   // console.error(typeof measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify the bug
// console.log(measureKelvin());

// const t1 = [3, 5, 1];
// const t2 = [9, 4, 5];

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const mergedTempsArr = t1.concat(t2);
//   console.log(mergedTempsArr);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < mergedTempsArr.length; i++) {
//     const currentTemp = mergedTempsArr[i];
//     if (typeof currentTemp !== "number") continue;

//     // debugger;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug(t1, t2);

// // A) Identify the bug
// console.log(amplitudeBug);

// // =============================

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let resultString = "";
//   for (let i = 0; i < arr.length; i++) {
//     resultString += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log("..." + resultString.trim());
// };
// printForecast(data1);
// printForecast(data2);
