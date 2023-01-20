/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

const markmass = 95;
const markheight = 1.88;
const johnmass = 85;
const johnheight = 1.76;

const bmimark = markmass / markheight ** 2;
const bmijohn = johnmass / (johnheight * johnheight);
const markHigherBMI = bmimark > bmijohn;

if (bmimark > bmijohn) {
  console.log(`Mark's BMI ${bmimark} is higher than John's! ${bmijohn}`);
} else {
  console.log(`John's BMI ${bmijohn} is higher than Mark's! ${bmimark}`);
}
console.log(bmimark);
console.log(bmijohn);
// console.log(markHigherBMI);
