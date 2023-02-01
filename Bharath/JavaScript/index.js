// // logical operators

// let teamA = (96 + 108 + 100) / 3;
// let teamB = (98 + 97 + 109) / 3;
// console.log(teamA, teamB);

// if (teamA > teamB) {
//   console.log("a wins");
// } else if (teamA === teamB) {
//   if (teamA > 100 && teamB > 100) {
//     console.log("true");
//   }
// } else {
//   console.log("teamB wins");
// }

// // statement : which ends with ";" and EXPRESSION means which produces a value
// // exmaples :
// const A = 122132;
// console.log(`get the number ${A}`); // here we get the output as :- get the number 122131;
// //console.log(` ${const A=122132}`); // here we get uncaought syntax error.
// // here we can understand that "const A=122132;" is an statement and "A" is an expression that gives the values.

// // terinary operators

// let a = 12;

// a === 12 ? console.log("yes") : console.log("no");

// // or

// let b = a === 12 ? "yes" : "no";

// console.log(b);

// // we place teronary operators in ${ } because these are expression that produce the values.

// // example :

// let c = `the followin ${b}`; // we get "the followin yes" as output .
// console.log(c);

// // tip caluculator

// let tip = 200;

// let calcu = tip >= 50 && tip <= 300 ? (tip / 100) * 15 : (tip / 100) * 20;

// console.log(
//   `the final tip is ${calcu} rupees.And the total value is ${
//     tip + calcu
//   } rupees.`
// );

// ///

// function funt(a, b) {
//   console.log(a, b);
//   const x = `${a} is number. ${b} is alphabet.`;
//   return x;
// }
// const d = funt();

// console.log(d);
// // function declaration
// function x(birth) {
//   return 2023 - birth;
// }
// console.log(x(2020));
// // function expression

// const h = function (birth) {
//   return 2023 - birth;
// };
// console.log(`age is ${h(2020)}`);

// // difference between function declaration and function expression is we cannot call function expression before initialization it but it happens in declaration

// // arrow functions

// const m = () => {
//   console.log(`Arrow function`);
// };

// const N = (x) => 14 + x;
// console.log(N(12));

// const v = (Birth) => {
//   console.log(`age of the person is ${Birth}`);
// };
// v(23);

// // calling a function in another function

// function caluculation(value) {
//   return 2 * value;
// }

// function countingLegs(people) {
//   const noOfLegs = caluculation(people);

//   return `here we have total ${noOfLegs} legs in the ground.`;
// }
// console.log(countingLegs(20));

// /// problem on the functions :

// const calAvereage = (k, y, z) => (k + y + z) / 3;

// function winner(q, w, e, r, t, u) {
//   const avgInd = calAvereage(q, w, e);
//   const avgAus = calAvereage(r, t, u);

//   if (avgInd > avgAus) {
//     console.log(`winner:India`);
//   } else {
//     console.log(`winner:Australia`);
//   }
// }

// winner(6, 5, 4, 3, 2, 1);

// /// array

// const myArray = ["a", "b", "c", "d"];
// myArray.push("e");
// console.log(myArray.length);

// myArray.unshift(1243);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// console.log(myArray.indexOf("a"));

// console.log(myArray.includes("d"));

// //// objects

// const objects = {
//   a: "1",
//   b: "2",
//   c: "3",
//   d: ["a", "b", "c", "d"],
// };
// console.log(objects["d"][0]);
// console.log(objects.a);

// objects.a = "brainvire";

// console.log(objects.a);

// objects.location = "India";
// console.log(objects);

// // objects

// const mark = {
//   name: "Mark",
//   mass: 78,
//   height: 1.69,
//   calBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   name: "John",
//   mass: 92,
//   height: 1.95,
//   calBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// john.calBMI();
// mark.calBMI();

// if (mark.BMI > john.BMI) {
//   console.log(`Mark's BMI (${mark.BMI}) is higher tha John's (${john.BMI})!`);
// } else {
//   console.log(`John's BMI (${john.BMI}) is higher tha Mark's (${mark.BMI})!`);
// }

// //// loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let arrayyyy = ["a", "b", "c", "d"];

// for (let i in arrayyyy) {
//   console.log(i);
// }

// let ran = Math.ceil(Math.random());
// console.log(ran);

// /////
// // const tips = [22, 295, 176, 440, 37, 185, 110, 96, 52, 22];
// // let ti = [];
// // let tot = [];
// // function cal(tips) {
// //   for (let i of tips) {
// //     if (i >= 50 && i <= 100) {
// //       ti.push((i / 100) * 15);
// //       tot.push(i + (i / 100) * 15);
// //     } else {
// //       ti.push((i / 100) * 20);
// //       tot.push(i + (i / 100) * 20);
// //     }
// //   }
// // }

// // const temp = [
// //   1, 2, 3, 5, 7, 9, 4, 555,

// //   56456, 44522, -1, 2, -2, -83, 342342342,
// // ];
// // function tempAMP(temp) {
// //   let greater;
// //   let leaser;

// //   for (let i of temp) {
// //     greater = temp[1];

// //     if (typeof i === "number" && i < greater) {
// //       greater = greater;
// //       leaser = i;
// //     } else if (typeof i === "number" && i > greater) {
// //       greater = i;
// //     }
// //   }
// //   if (leaser < 0) {
// //     console.log(greater + leaser);
// //   } else {
// //     console.log(greater - leaser);
// //   }
// // }
// // tempAMP(temp);

// // console.log(typeof temp);

// console.log(Math.floor(9.886)) 
"use strict";


// function x(){
//     if(true){
//         if(true){
//             if(true){
//                 if(true){
//                     var  valuess="vjfsgkjb";
//                     const conss="sdj";
//                 }
//             }
//         }
//     }
//     console.log(valuess);
// }
// x(); 

// var firstName = "bharathfhnv";

// const b ={
//     firstName:"bharath",
//     last:"kumar",
//     getNAME:function(){
//         console.log(`my firstname : ${this.firstName}`);
//         const hgafh=()=>{
//             console.log(this.firstName)
//         }
//         hgafh();

//     },
//     getLast:()=>{
       
//         console.log(this.last)
//     }
// }
// b.getNAME();
// b.getLast(); 


// const funexpress=function(a,b){
//     console.log(arguments);
//     return a+b
// } 

// let age=233;
// var odlege=age;
// odlege=2789;
// age=74936;
// console.log(odlege);
// console.log(age);


// const names = {
//     first:"First",
//     second:"second",
// }
// const oldName=names;
// console.log("before changing :",oldName.first);
// oldName.first="second";
// console.log("after changing:",oldName.first);
// console.log("after changing:",names.first); 


// Array destructuring 
// console.log("Array destructuring");
// let array = [1,2,3,4,5];
// let [x=23,y]=array;
// console.log(x) // here we get x=1 

// let [n,m,b,h,j] = array;
// n=23;
// console.log(array);// nothing will change in the array 




// // spread operator  used to upack 
// console.log("spread operator")
// let newArray=[...array,34,434,343];
// console.log(newArray);

// const str = "abcdef";
// console.log([...str]);

// let object = {
//     name:"abdc",
//     age:"34",
//     city:"Ahmedabad",
// } ;

// let newObject={...object, working:"yes",experience:"5yr"}; // using spread to exetend the object 
// console.log(newObject);  


// let objectCOPY ={...object};  
// objectCOPY.age = 54 ;

// console.log(object); // it doesnot effect the original object 





// function d(a=12,b=23,c=45){ 
//     console.log(a,b,c);
// }
// d(...array);// eventhough we give default value while passing to funtion nothing will happen 


// // rest operator  use to pack 
// console.log("rest operator")
// const arr = [1,2,3,4,5,6,7]

// let [e,k,f,...r]=[1,2,3,4,5,6,7];
// console.log(e) // 1
// console.log(k) // 2
// console.log(f) // 3
// console.log(r); // we get

// let { firstName, ...rest } = {
//     firstName: "abc",
//     lastName: "xyz",
//     age: 27
//   };                           // 
  
//   console.log(firstName);  // "abc"
//   console.log(rest); // we get remaining  



// function res(...args){
//     console.log(args) // we get [1,2,3] 3 args packed as single list 
// }
// res(1,2,3);  

// // short circuting  
// console.log("------")
// console.log(3 || "b");
// console.log("" || 2);
// console.log(undefined || null ); // ( "||" ) operator returns the first truthy value occured 
// console.log("-------")

// console.log(3 && "");
// console.log(null && undefined)
// console.log("" && null);
// console.log(true && 0); // ("&&") operator return the first false value occured  


// const ob1={
//     name:"ob1",
//     num: 0
// }
// const ob2={
//     name:"ob2",
// }

// ob1.num ??=10;  // ("??") nullish operator takes (null or undefined ) as false values
// ob2.num ||=100;

// console.log(ob1);
// console.log(ob2); 


// // coding challange 
// console.log("-----problem -----")
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     }
// } 

// const players1 = game.players[0]; // team 1
// const [gk1,...fielplayers1]=players1; 
 

// const players2=game.players[1]; // team 2 
// const [gk2,...fieldplayers2]=players2; // used rest  


// const allPlayers=[...players1,...players2]; // used spread 

// const playersfinal = [...players1,"thiago","coutinho","perisic"]  // concatination 

// const team1=game.odds["team1"]; 
// const draw =game.odds["x"]
// const team2=game.odds["team2"]

// const printGoals = function(...args){
//     console.log(`${args.length} goals were scored`)
// }

// printGoals("a","b","c","d"); 
// printGoals(...game.scored); 

// team1 > team2 || console.log("team1 wins");
// team1 < team2 || console.log("team2 wins"); 


// // for of loop 
// let loop = [1,2,3,4,5,6,7,8];

// for (const i of loop){
//     console.log(i)
// } 

// for (const i of loop.entries() ){
//     console.log(i);
// }

// for (const [i,e] of loop.entries() ){
//     console.log([i+1,e]);
// }

// ES6 tech 
// let days ={
//     day1:"mon",
//     day2:"tues",
//     day3:"wed",
//     day4:"ths",
//     day5:"fri",
//     day6:"sat"

// }

// let obj = {
//     name:"weeks",
//     days:days,
//     print(){
//         console.log(this.days); // short form of writing a function 
//     }
// }
// console.log(obj.print());  


let li = [12,23,34,56,78,90]; 

let objt={
    name:"mohan",
    age:"babu",
    city:"pavan",
    state:"siva",
    country:"india",
}

const eee= Object.entries(objt);
const eeee=Object.keys(objt);
const ee=Object.values(objt);
for(const i of ee){
    console.log(i );
} 

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};


const nwSet=new Set(game.players[0]);
console.log(nwSet); 

const rrr=[...new Set(game.players[0])];
console.log(rrr)



let rest = new Map();

rest.set("pari","babu");
rest.set("babu","pedapudi");

console.log(rest.get("pari"));
console.log(rest.get("babu"));

const st="bharath kumar";

console.log(st.slice(2,-3))

console.log(st.padStart("10","+").padEnd("20","+"))












