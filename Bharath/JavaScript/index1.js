"use strict";

// functions 
const flight="lh234";
const jonas={
    name :"jonas sch",
    passport:23456788990,
}

const chickIn=function (flightNum,passanger){
    
    flightNum="Lh343";
    passanger.name="Mr."+passanger.name;
    if(passanger.passport===23456788990){
        alert("correct");
    }else{
        alert("no");
    }
}
//chickIn(flight,jonas);

// higher order functions 

const oneWord = function(str){
    return str.replace(/ /g,"").toLowerCase();
};
const firstWordCaps=function(str){
    const [first,...others]=str.split(" ");
    return [first.toUpperCase(),...others].join(" ");
}

const convert = function(str,fn){
    return `transformed str : ${fn(str)}`;

}
let str = "capital case first word";
console.log(convert(str,firstWordCaps));
console.log(oneWord(str)); // we are passing a function as argmnt to another function.  

// clousers 

const greet = function(greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}                              
const greetingName= greet("hey");


greetingName("bharath");

greet("hello")("bharath");

// using arrow function 

const Greet=GreetingName => Name => console.log(`${GreetingName} ${Name}`);
const GreetingName=Greet("Hey");
GreetingName("bharath");

Greet("hello")("Bharath");  

// call and apply methods  

const airIndia={
    airline:"AirIndia",
    iata:"LH",
    bookings:[],
    book(flightnUm,name){
        console.log(`${name} booked a flight on ${this.airline}`);
        this.bookings.push({flightnUm:`${this.iata}`});
    },
    print(){
        console.log(this.iata);
    }
}
airIndia.book(23,"bharath");
console.log(airIndia.bookings[0]);

const indigo={
    airline:"Indigo",
    iata:"fg",
    bookings:[]
    
}
const book=airIndia.book;
book.call(indigo,30,"Mohan"); // here we can call the book function in indigo using "call" function

const fil = [234,"abdc"];
book.call(airIndia,...fil); 

const Book = airIndia.book.bind(indigo);
Book(2334,"xyz");
 // bind method is used to barrow the method from another object  

const print = airIndia.print.bind()
const Print = airIndia.print.bind(indigo);
Print();


/// immediate invoked function expressions 


(function (){
    console.log("print invoking is done.....");
}) ();                                    // invoked without calling a function

{
    const privates='block scope';
    var variable = "functionscope";
    let blocks="block scope";
}

console.log(variable); // only var is accessable 

let arr=[2,3,4]
console.log(arr.slice(0,-1))


const fullname="   harsha   prajapati  "
const[first,...others]=fullname.trim().split(" ");
console.log([first.toUpperCase(),...others].join(" ")); 


let f ;

const g = function(){
    let a = 23;
    f= function(){
        let b = a*2;
        console.log(b);
    }
};
g();
f();




document.body.addEventListener("click",()=>{
    (function(){
        let header=document.getElementById("h1");
        header.style.color="red";
    })();
})




