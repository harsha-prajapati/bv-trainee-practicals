// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

//add 12 elements in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
//remove two elements from array
// const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);

// REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// JOIN
// console.log(letters.join(' - '));

// The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---- FOREACH ----');
// movements.forEach(function (mov) {
//   if (mov > 0) {
//     console.log(` You deposited ${mov}`);
//   } else {
//     console.log(` You withdrew ${Math.abs(mov)}`);
//   }
// });


// forEach With Maps and Sets
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//map,filter and reduce method
//filter 
// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   return studentGrades; 

//   //map
//   const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled);

//callback function
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);

