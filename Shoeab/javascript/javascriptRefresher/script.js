//let const and var difference
//Using var
var name='shoeab';
console.log(name);
name='sakib';
console.log(name);
//using let 
//let and var are same but let is used for block level scope
let myName='shoeab';
console.log(myName);
myName='sakib';
console.log(myName);

//using const 
const fName='shoeab'
console.log(fName);
// fName='sakib';
// console.log(fName);


//classes
class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species);

//the spread operator
const number=[1,2,3,4];
// const number2=[number,5,6,7,8]; //without spread operator if we combine to array then it produce 2 array
const number2=[...number,5,6,7,8]; //it will combine both values and return 1 array inside that
console.log(number);
console.log(number2);

//destrcturing of array
const array=[1,2,3,4,5];
// const[a,b]=array;
// console.log(a);//it produce the value 1
// console.log(b);//it produce the value 2
//if i want the value of position 2 instead of one then we can seprate the value by quamma like that
const [a,,b]=array;
console.log(a);
console.log(b);

// array Method
const numbers=[1,2,3];
const cube=numbers.map((num)=>
{
    return num*num*num;
})
console.log(numbers);
console.log(cube);
 