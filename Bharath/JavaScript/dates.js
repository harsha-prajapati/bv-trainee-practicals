"use strict";

 console.log(parseInt("20"));
 console.log(parseInt("20px"));

 console.log(parseFloat("20"));
 console.log(parseFloat("2.4px")); // used to get a number out of a string   

 console.log(isNaN("a"));
 console.log(isNaN("20px"));
 console.log(isNaN("20")); 
   

 console.log(isFinite( 23/0)); // we get infinite number so we are getting false
 console.log(isFinite("20"));
 console.log(isFinite(28.9)); 
 console.log(isFinite("20px")); // isFinite method is prefect to check its number are not 
 
 console.log(Number.isInteger(20.7));
 console.log(Number.isInteger(290.0)); 
 
 // math 

 console.log(Math.random()*4);
 console.log(Math.trunc(-23.4));
 console.log(Math.trunc(23.4));

 console.log(Math.floor(23.4));
 console.log(Math.floor(-23.4));

 console.log(Math.ceil(234.4343));
 console.log(Math.ceil(-234.4343));

 console.log(Math.round(3.3243243));
 console.log(Math.round("3.467647"));

 console.log(3.43443.toFixed());
 console.log(3.67684.toFixed(4)); 

 // numeric separator 


 console.log(23_000);
 console.log(230_00);

 console.log(Number("23_000")); // here we get NaN in strings we get
console.log(Number(parseInt("23_000"))); // we get 23 doesnot give 0's after "_"

// console.log(Number(23__000));// cannot use 2 "_" at atime get error 
// console.log(Number(23._123)); // gets error not to use like this  
console.log(Number(23.34_34)); // we get 23.3434 

// dates 


console.log(new Date());
console.log(new Date(2023,23, 3, 23, 23 ,23, 2));
console.log(new Date(2,4,7,4));
console.log(new Date(45435454354)); 
console.log(Date.now());
console.log(new Date(1674809692585));

const toDay=new Date(1674809692585);
console.log(toDay.getDate());
console.log(toDay.getDay());
console.log(toDay.getHours()); 
console.log(toDay.getMinutes());
console.log(toDay.getMilliseconds());
console.log(toDay.getMonth());
console.log(toDay.getFullYear()); 

console.log((new Date(2023,0,27)-new Date(2023,0,17))/(1000*60*60*24));

const date = new Date();
console.log(new Intl.DateTimeFormat('en-GB', {   year: 'numeric', month: 'numeric', day: 'numeric',
hour: 'numeric', minute: 'numeric', second: 'numeric',dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));

const number = 123456.789;
console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IND', maximumSignificantDigits:15 }).format(number));
console.log(new Intl.NumberFormat('en-IN', { style: 'unit',unit: 'celsius', currency:"JPN", maximumSignificantDigits:15 }).format(number));

// timers  

let x=0;
const randomss = setInterval(function(){console.log(`${x+=1} :${Math.ceil(Math.random()*10)}`)},1000);

const cl=setTimeout(function(){
    clearInterval(randomss);
},7000); 

console.log(Math.round(-23.5));
