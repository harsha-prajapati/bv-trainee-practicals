'use strict';

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const numbers = [1, 2, 3, 4, 5];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

// const [d, e, f] = numbers;
// console.log(d, e, f);


// // 103 Destructuring Arrays

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (stateIndex, mainIndex) {
    return [this.starterMenu[stateIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ time = 0, addres = 'none' }) {
    console.log(`the order will ${time} to ,${addres}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your Pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '12:30',
  addres: 'abc',
});

// //Switchin Two variables
let [main, , secondary] = restaurant.categories; //By this we can skip element in the middle
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Or
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [stater, mainitem] = restaurant.order(2, 0);
console.log(stater, mainitem);

//nested Array array inside array
const nested = [2, 3, [4, 5, 6]];
const [i, j, k] = nested;
// console.log(i,j,...k)
console.log(i);
console.log(nested[2][0]); // here we are accessing Array in array

//Default Values

const [p, q, r = 8] = [8, 9];
console.log(p, q, r);

//104  Destructuring Objects

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { name: restaurantname, openingHours: hours } = restaurant;

console.log(restaurantname, hours, categories);

const { menu = [], starterMenu = [] } = restaurant; //assigning empty array as default value
console.log(menu, starterMenu);

let a = 111;
let b = 999;
const obj = { a: 23, b: 33, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);

//105 Spread Operator(...)
const arr = [7, 8, 9, 10, 11, 12];
const copiedArr = [1, 2, ...arr];
// console.log('SPREAD OPERATOR')
console.log(copiedArr);
// const [ab,bc,c,...arr1] = arr;
// console.log(arr1);
const newMenu = [...restaurant.mainMenu, 'Noodles'];
console.log(newMenu);
//Shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

//iterabels are strings ,maps,sets but no objects

const str = 'Pavan';
const iteral = [...str, ...'sai'];
console.log(iteral)
console.log(...iteral);

//Pasta Example
// const dataPasta = [
//   prompt(`let\'s make pasta ing1`),
//   prompt(`let\'s make pasta ing2`),
//   prompt(`let\'s make pasta ing3`),
// ];
// restaurant.orderPasta(dataPasta[0], dataPasta[1], dataPasta[2]);
// restaurant.orderPasta(...dataPasta)

//Objects

const newRestarent = { foundedIn: 2022, ...restaurant };
console.log(newRestarent);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'SAi';
console.log(restaurantCopy);
