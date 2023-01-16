"use strict";
// function
//Function without  a parameter
// function log() {
//   console.log("Congratulation u have been logged in");
// }

// log();
//Function with a parameter

// function age(age) {
//   console.log(`Your age is ${age}`);
// }

// age(25);

// Function returning data

// function count(counts) {
//   const numOfCounts = `numbers of counts is ${counts}`;
//   return numOfCounts;
// }

//if u call directly function it will not show anything on the sceen of console.
// to acces that  u will need to print it in a variable and then use console it.

// ex

// const totalCounts = count(55);
// console.log(totalCounts);

// Function declaration

// function age(age) {
//   return age - 10;
// }

// // const age1 = age(25);
// console.log(age(25));

// function expression

// const newage = function (newagee) {
//   return newagee;
// };

// const age2 = newage(33);

// console.log(age2);

// Arrow Functions

// const hello = (namee) => `This is greeting from ${namee}`;
// const age0 = hello("amit");
// console.log(age0);

//  arrow function example2

// const calcAge = (birthYear) => 2037 - birthYear;
// const age1 = calcAge(1998);
// console.log(age1);

// const retirement = (firstname, currentAge) => {
//   const ageLeft = 65 - currentAge;
//   return `Hello ${firstname} u r retirement age is still ${ageLeft} years to go`;
// };
// console.log(retirement("john", 25));

// function inside a function

// function multiply(number) {
//   return number * 4;
// }
// function table(num1, num2) {
//   const multiply5 = multiply(num1);
//   const multiply6 = multiply(num2);
//   return `The results are ${multiply5} and ${multiply6} and this is extrapart  ${multiply(
//     10
//   )}`;
// }
// console.log(table(8, 9));

//Task 1

//Your tasks:
/*1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */

// const calcAverage = (score1, score2, score3) => {
//   const avgScore = (score1 + score2 + score3) / 3;
//   return avgScore;
// };
// function checkWinner() {
//   const avgDolphins = calcAverage(44, 23, 71);
//   const avgKoalas = calcAverage(65, 54, 49);

//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins(${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins(${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// }
// checkWinner();

//Arrays
//Two ways to create an array
//way 1
// const table8 = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
//way2
// const y = new Array(2, 4, 6, 8, 10, 12, 24, 16, 18, 20);
// console.log(y);

// const add = (num) => {
//   return console.log(num + 10);
// };
// const addedValue = [add(table8[0]), add(table8[1])];

//  Challenege 2
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

// const calcTip = (billValue) => {
//   if (300 > billValue > 50) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(tips);
// console.log(total);

// object

// const family = {
//   members: 4,
//   age: [52, 47, 24, 22],
//   group: 656 - 235,
// };
// console.log(family);

// two ways to access the object

// const mem = family.members;
// console.log(mem);
// 2nd way
// const grp = family["group"];
// console.log(grp);

// To add something in object we can use
// family.location = ["perth"];
// console.log(family);

// // 2nd way
// family["newMem"] = ["hey"];

// const amit = {
//   firstName: "Amit",
//   age: 23,
//   blood: "o +",
//   friends: 3,
//   frndsName: ["a", "b", "c", " deep"],
// };

// console.log(
//   `Amit has ${amit.friends}  friends and his best friend is ${amit.frndsName[3]}.`
// );

// const amit = {
//   firstName: "Amit",
//   lastName: "Chaudhary",
//   birthYear: "1998",
//   job: "teacher",
//   friends: ["nirav", "yash", "vraj"],
//   hasIdIssued: true,
//   birthYear: function (age) {
//     return 2023 - age;
//   },
// };
// console.log(amit.birthYear(23));

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBmi();
// john.calcBmi();
// // console.log(mark.bmi, john.bmi);
// console.log(mark.bmi > john.bmi)
//   ? console.log(
//       `Marks BMI(${mark.bmi}) is greater than John's BMI(${john.bmi})`
//     )
//   : console.log(
//       `John's BMI(${john.bmi})is higher than Marks BMI(${mark.bmi}) `
//     );
