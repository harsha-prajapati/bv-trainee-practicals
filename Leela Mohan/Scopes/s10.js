'use strict';

// const bookingDetails = [];

// const createBooking =  function(trainNumber, noofPassengers = 1, price = 275) {
//     const booking = {
//         trainNumber,
//         noofPassengers,
//         price,
//     };
//     console.log(booking);
//     bookingDetails.push(booking);
// };

// createBooking(28003, 2, 300);
// createBooking('25346');
// createBooking(28075, 2);

// //Passing Arguments 

// const flight = 'AI2244';
// const profile = {
//     name : 'Leela Mohan Krishna',
//     passport : 2842034334,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'AI2233';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 2842034334 ){
//         alert('Checked In');
//     } else {
//         alert ('Wrong passport');
//     }
// };

// //checkIn(flight, profile);
// console.log(flight);
// console.log(profile);

// const newPasssport = function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000000)
// }

// // newPasssport(profile);
// // checkIn(flight, profile);

// const word = function(str) {
//     return str.replaceAll(' ', '').toLowerCase();
// }

// const firstUpperWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //Higher order - functions 

// const transformer = function(str, fun) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fun(str)}`);
//     console.log(`Transformed by: ${fun.name}`)
// };

// transformer('js is the best!', firstUpperWord);
// transformer('js is the best!', word);

// // func returning func

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// greet('Hello')('Brother');
// greet('Hey')('Mohan');

// const heyGreet = greet('Hey');
// heyGreet('Mohan')


// // By using Arrow func
// const greetAll = (greeting) => { 
//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     };
// };

// greetAll('Hi')('Everyone');

// // Call and Apply Methods 

// //Call

// const airIndia = {
//     airlines : 'AirIndia',
//     code : 'AI',
//     bookings : [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airlines} flight ${this.code}-${flightNum}.`);
//         this.bookings.push({flight: `${this.code}${flightNum}`, name})

//     },
// };
// // console.log(airIndia);
// airIndia.book(2244, 'Leela');
// airIndia.book(3322, 'Mohan');

// const indigo = {
//     airlines : 'Indigo',
//     code : 'IN',
//     bookings : [],
// };

// const callBook = airIndia.book;


// callBook.call(indigo, 1324, 'Krishna');
// console.log(indigo)

// callBook.call(airIndia, 5544, 'Leela Mohan');
// console.log(airIndia);

// //Apply

// const newPerson = [1166, 'Rohit']
// callBook.apply(indigo, newPerson);
// console.log(indigo)

// // callBook.call(indigo, ...newPerson);

// //bind 

// const bookIN = callBook.bind(indigo);
// const  bookAI = callBook.bind(airIndia);

// bookIN(1818, 'abcd');
// bookAI(1919, 'xyz');

// const bookIN2222 = callBook.bind(indigo, 2222);
// bookIN2222('jonas');
// bookIN2222('Mark coooper');


// airIndia.totalPlanes = 333;
// airIndia.buyPlane = function() {
//     console.log(this);
//     // this.totalPlanes++;
//     // console.log(this.totalPlanes)
// };

// document.querySelector('.btn')
// .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// // 

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));
// console.log(addVAT(23));

// // 

// const addTax2 = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// };

// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(200));
// console.log(addVAT2(23));



// Looping Arrays : forEach

// const movements = [200, 300, 400, 500, 600, -800, -300, -1000];

// for (const [i, each] of movements.entries()) {
//     if (each > 0) {
//         console.log(`Movement ${i + 1}: You Deposited ${each}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(each)}`);
//     }
// };

// movements.forEach(function (each, i, arr) {
//     if (each > 0) {
//         console.log(`Movement ${i + 1}: You Deposited ${each}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(each)}`);
//     }
// });

// // Map

// const currencies = new Map([
//     ['USD', 'United States Dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound Sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

// //SET

// const currenciesUnq = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnq);

// currenciesUnq.forEach(function (value, _, map) {
//     console.log(`${value}: ${value}`);
// });











// map, filter, reduce, find , findIndex
// map

// const numbers = [2, 4, 5, 6, 7];

// const double = numbers.map(function (n) {
//     return n ** 2;
// });

// console.log(double);
// // console.log(numbers);

// const square = numbers.map(n => n * n);

// console.log(square);

// const table = [1,2,3,4,5,6,7,8,9,10];

// // const tables = table.map(n => n * 9);
// // for (const i of tables) {
// //     console.log(`9 * ${i/9} = ${i}`)
// // };


// // const squares = []
// // for (const each of numbers) squares.push(each ** 2);
// // console.log(squares)

// // filter 

// const words = ['abcd', 'mnopq', 'rstuv', 'ijklmnopq', 'abcdefghijk', 'tuvxyz'];

// const result = words.filter(word => word.length >= 6);

// console.log(result);
// const result1 = words.filter(word => word[0] === 'a');

// console.log(result1);
// const result2 = words.filter(word => word.startsWith('t'));

// console.log(result2);

// //reduce
// const array1 = [1, 2, 3, 4];

// const sum = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 0
// );
// console.log(sum);

// const initialValue = 10;
// const sumWithIntialVal = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// );
// console.log(sumWithIntialVal);

// //find 

// const array = [5, 12, 8, 13, 44];

// const found = array.find(ele => ele > 10);

// console.log(found);

// const scores = [100, 111, 108, 99];
// const notCentury = scores.find(n => n < 100);
// console.log(notCentury);

// const scores1 = [91, 11, 78, 99];
// const century = scores1.find(n => n > 100);
// console.log(century)

// // findIndexOF

// const values = [5, 12, 8, 100, 44];
// const is100 = (ele) => ele === 100;
// console.log(values.findIndex(is100));

// const values2 = [115, 10, 8, 100, 44];
// const isBelow100 = values2.findIndex(ele => (ele < 100 && ele >10));
// console.log(isBelow100);








// //some

// const x = [11, 13, 15, 17, 21, 25];
// const elder = x.some((n) => n > 20);
// console.log(elder)

// const even = (n) => n%2 === 0;
// console.log(x.some(even))


// //every
// const y = [10, 12, 14, 16, 20, 26];
// const elderAll = y.every((n) => n > 20);
// console.log(elderAll)

// const evenAll = y.every((n) => n%2 === 0);
// console.log(evenAll)


// //flat
// const arr1 = [1, 2,[3, 4, 5], 6, 7, [8, 9]];
// console.log(arr1.flat())

// const arr2 = [1,2,[3, [4,5,[3,3,3]]], 6, 7, [8,9]];
// console.log(arr2.flat(3))
// // console.log(arr2)


// //flatMap
// const arr3 = [1, 2, [3], [4, 5,[3,4]], 6, []];
// const flattened = arr3.flatMap(num => num);
// console.log(flattened);



// //Sorting Arrays

// const months = ['March', 'Jan', 'Feb', 'Dec', 'Apr'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100];
// // array1.sort();
// // console.log(array1);
// const asc = array1.sort((a, b) => a-b);
// console.log(asc)

// const xyz = [1,2,3,[4,5,6], [7,8,9],[10,11,12], [-1, -22,-12], 22];

// const allSum = xyz.flatMap(n => n)
// .filter(m => m>0)
// .reduce((a,c) => a + c , 0)
// console.log(allSum)

// //filling Arrays

// const array = [1,2,3,4,5];
// console.log(array)
// console.log(new Array(1,2,3,4,5,6));

// //Empty Arrays

// const a = new Array(7);
// console.log(a)

// a.fill(1)
// console.log(a)

// a.fill(22, 1)
// console.log(a)

// a.fill(54, 0, 4)
// console.log(a)

// a.fill('*', 1, -1)
// console.log(a)


// //Array.from

// const b = Array.from({length: 9}, () => 6);
// console.log(b)

// const c = Array.from({length : 6}, (_, i) => i+1);
// console.log(c)

// console.log(Array.from([1, 2, 3], n => n + n));

// console.log(Array.from('Leela'));

// const arr1 = [1, 2, 3, 4];

// arr1.map((x) => [x * 2]);


// // arr1.flatMap((x) => [x * 2]);
// // arr1.flatMap((x) => [[x * 2]]);
// console.log(arr1)
// console.log(arr1.map((x) => [x * 2]))
// console.log(arr1.flatMap((x) => [x * 2]))





// const diameter = 222_333_555_888;
// console.log(diameter);

// const price = 22_444;
// console.log(price)

// console.log(Math.PI.toFixed(2));

// console.log(Number('22_333'));
// console.log(parseInt('22_333'));

// // BigInt

// console.log(5764535868736483673436987345763785634773649);
// console.log(5764535868736483673436987345763785634773649n);

// const a = 53486753445648543698753869478673648367n
// const n = 23;
// // console.log(a * n)
// console.log(a * BigInt(n));

// console.log(100n > 99)

// console.log(100n === 100);
// console.log(typeof 100n);
// console.log(typeof 100);

// // Creating Dates 

// // console.log(new Date());

// // console.log(new Date('Jan 26 2023 22:30:16'));
// // console.log(new Date('March 30, 2023'));

// // console.log(new Date(2025, 3, 30, 10, 30, 29));

// // console.log(new Date(0));
// // console.log(new Date(29 * 24 * 60 * 60 * 1000));

// // working with dates 

// const time = new Date(2023, 4, 9, 7, 19, 33);
// console.log(time);
// console.log(time.getFullYear());

// console.log(time.getMonth());

// console.log(time.getDay());

// console.log(time.getDate());

// console.log(time.getHours());

// console.log(time.getMinutes());

// console.log(time.getSeconds());

// console.log(time.toISOString());

// const intDate = new Date(2023, 0, 28);
// console.log(intDate);
// console.log(new Intl.DateTimeFormat('en-US').format(intDate));



// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, "1000")

// function func() {
//     console.log('A func has been called');
// }
// setTimeout(func, 0);
// console.log('After setTimeout');

// const games = ['Cricket', 'Football'];
// const play = setTimeout((g1, g2) => console.log(`I will play both ${g1} and ${g2}.`), 
// 0, ...games);
// console.log('First Executed');


// Set Interval


// const intervalId = setInterval(function(){
//     const now = new Date();
//     console.log(now)
// }, 1000,);

// // clearInterval(intervalId);
// const clear = setTimeout(function() {
//     clearInterval(intervalId);
// }, 3000)


