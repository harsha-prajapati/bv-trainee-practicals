'use strict';
// function calAge(birthYear) {
//     const age = 2023 - birthYear;

//     function printAge () {
//         let output = `${fistName}, You are ${age}, born in ${birthYear}.`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 2000) {
//             var millenial = true;
//             //New Var with same name
//             const fistName = 'Mohan';

//             //Reassign the outer scope Var
//             output = 'New Output';

//             const str = `Oh, You're a millenial, ${fistName}.`
//             console.log(str);

//             function add(a, b) {
//                 return a+b;           
//             }
//             console.log(add(2, 3)); 
//         }
//         //console.log(str);
//         console.log(millenial);
//         //console.log(add(2, 3));
//         console.log(output)
//     }
//     //console.log(fistName); 
//     printAge();
//     return age;
// }

// const fistName = 'Leela';
// calAge(1998);






// //Hoisting

// // functions 

// console.log(addDec(5, 6));
// // console.log(addExp(5, 6));
// // console.log(addArw(5, 6));


// function addDec(a, b) {
//     return a+b;
// }

// const addExp = function(a, b) {
//     return a+b;
// }

// const addArw = (a, b) => a+b;


// // Declaring variables with var, let, const
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // this keyword


// // console.log(this);

// const ageCalExp = function(year) {
//     console.log(2023 - year);
//     console.log(this)
// };
// ageCalExp(1990);

// const ageCalArw = year => {
//     console.log(2023 - year);
//     console.log(this)
// };
// ageCalArw(1995);

// const person = {
//     fistName : 'Leela',
//     birthYear : 1998,
//     calAge : function () {
//         console.log(this)
//         console.log(2023 - this.birthYear);
//     },
//     greet : () => {
//         console.log(this)
//         console.log(`Hi ${this.fistName}`)
//     }
// };
// person.calAge();
// person.greet()

// //Method Borrowing

// const person2 = {
//     fistName : 'Mohan',
//     birthYear : 1988
// };

// person2.calAge = person.calAge;
// person2.calAge();



// const restaurent = {
//     name : 'Classico Italiano',
//     location : 'Firenze, Italy',
//     catagories : ['Italian', 'Pizzeria', 'Vegeterian', 'Oraganic'],
//     starterMenu : ['Focaccia', 'Bruscheta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu : ['Pizza', 'Pasta', 'Risotto'],
//     openingHours : {
//         fri: {
//             open : 12,
//             close : 22,
//         },
//         sat : {
//             open : 11,
//             close : 23,
//         },
//         sun : {
//             open : 0,
//             close : 24,
//         },
//     },

//     order : function (startIndex, mainIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//     },

//     orderPizza : function(mainIngredient, ...toppings){
//         console.log(mainIngredient);
//         console.log(toppings);
//     }
// }

// Ds Arrays
// const arr = [2, 6, 8];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, second] = restaurent.catagories;
// console.log(first, second);

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const [starter, main] = restaurent.order(1,2);
// console.log(starter, main);

// const nums = [2, 4, [7,8]];
// // const [a,, b] = nums;
// // console.log(a,b);

// // const [a,, [b,c], g] = nums;
// // console.log(a, b, c, g);

// const [a,, [b, c]=[1,1], g=1] = nums;
// console.log(a, b, c, g);


// Ds Objects

// const {name, openingHours, catagories} = restaurent;
// console.log(name, openingHours, catagories);

// const {name:resName, openingHours:timings, catagories:types} = restaurent;
// console.log(resName, timings, types);

// //Default Val
// const {menu = [], starterMenu : starters = []} = restaurent;
// console.log(menu, starters);


// // Mutate Var
// // let a = 121;
// // let b = 223;
// // const obj = {a:2, b:5, c:9};
// // ({a, b} = obj);
// // console.log(a, b);

// // nested obj

// const {sat} = openingHours;
// console.log(sat);

// const {sat :{
//     open, close}
// } = openingHours;
// console.log(open, close);

// const {sat :{
//     open: O, close: C}
// } = openingHours;
// console.log(O, C);

// // Spread Operator

// const arr = [2,4,6,8];

// const newArr = [...arr]
// console.log(newArr)

// //copy 

// const newMenu = [...restaurent.mainMenu];
// console.log(newMenu);

// //join

// const joinArr = [...restaurent.starterMenu, ...restaurent.mainMenu];
// console.log(joinArr)

// //Iterables 

// const str = 'Mohan';
// const ltrs = [...str];
// console.log(ltrs);
// console.log(...str);

// //Rest 

// //arr
// const [a,b,...c] = [1,2,3,4,5,6];
// console.log(a,b,c);

// const [ ,Pasta,Risotto, ...remaining] = [...restaurent.mainMenu, ...restaurent.starterMenu];
// console.log(Pasta, Risotto, remaining);

// //Obj

// const { fri, ...weekdays } = restaurent.openingHours;
// console.log(weekdays)

// restaurent.orderPizza('Panner', 'olives', 'onions', 'capsicum');

// //Short-Circuiting (&& ans ||)

// console.log(3 || 'Mohan');
// console.log('' || 'Mohan');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(3 && 'Mohan');
// console.log('' && 'Mohan');
// console.log(true && 0);
// console.log(undefined && null);

// // OR assgn Operator

// const person1 = {
//     name: 'abc',
//     weight: 54
// }

// const person2 = {
//     name: 'xyz',
// }

// // person1.weight = person1.weight || 60;
// // person2.weight = person2.weight || 60;

// person1.weight = person1.weight && 60;
// person2.weight = person2.weight && 60;

// console.log(person1);
// console.log(person2);

// const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
// console.log(menu)

// for (const each of menu) {
//     console.log(each)
// }

//Maps 

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Frienze Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest)