console.log(a); //Uncaught ReferenceError: a is not defined at <anonymous>:1:13
console.log(ab); //Uncaught ReferenceError: a is not defined at <anonymous>:1:13
console.log(abc); //hoisting done but not show result

abc();
function abc() {
  console.log("hello");
}

let a = 10;
//temp dead zone
const ab = 20; //temp dead zone

var abc = 30;

//declartion allowed
//initilizatiom not allowed
//function expreestion not working in hoisting

//not hoising let var and const
var abc = function () {
  console.log("not used");
};
