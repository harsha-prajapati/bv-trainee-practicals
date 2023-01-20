/*
let name = "hello";
let pqr = "data";
// const abc = {
//   name: "vishal",

//   fun: function () {
//     console.log(this.name);
//   },

//   dataname: () => {
//     // city: "jamnagar";
//     console.log(this.name);
//   },
// };

const hello = () => {
  console.log(name);
};
hello();

function add() {
  console.log(pqr);
}
add();
// console.log(abc);

// console.log(abc.fun());
// console.log(abc.dataname());

// const avg = function (date) {
//   console.log(2023 - date);
//   console.log(this);
// };
// avg(1999);

console.log(this);
const avg2 = (date) => {
  console.log(2023 - date);
  console.log(this);
};
avg2(1999);



*/

console.log(this);

const age = function (year) {
  console.log(2023 - year);
  console.log(this);
};

age(1999);

const arrow = (year) => {
  console.log(2023 - year);
  console.log(this);
};
arrow(1999);

// undefine

// const fname = "vis";

// const data = {
//   fname: "vishal",
//   age: function () {
//     console.log("simple fun", this.fname);
//   },
//   good: () => {
//     console.log("arrow fun", this.fname);
//   },
// };
// data.good();
// data.age();

// proper output

// const fname = "vis";

// const data = {
//   fname: "vishal",
//   age: function () {
//     console.log("simple fun", this.fname);
//   },
//   good: () => {
//     console.log("arrow fun", fname);
//   },
// };
// data.good();
// data.age();
