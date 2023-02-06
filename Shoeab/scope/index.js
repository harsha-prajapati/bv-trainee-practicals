// // function calcAge(birthYear){
// //     const age=2023-birthYear;
// //     console.log(firstName);
// //     function printAge(){
// //         const output=  `${firstName}, you are ${age} born in ${birthYear}`;
// //         console.log(output);
// //         if(birthYear>=1999 && birthYear<=2023)
// //         {
// //             const str=`you are millenial`;
// //             console.log(str);
// //         }
// //         // console.log(str);
// //      }
// //      printAge();
// //      return age;
     
// //     } 
      
// // const firstName='shoeab';
// // calcAge(1999);


// //hoisting variables
// // console.log(me);
// // console.log(job);
// // console.log(year);



// // var me='shoeab';
// // let job='teacher';
// // const year=1991;


// //functions
// // console.log(addData(2,3));
// // console.log(addexp(2,3));
// // console.log(addArrow(2,3));
// // function addData(a,b)
// // {
// //     return a+b;
// // }
// // const addexp=function(a,b){
// //     return a-b;
// // }
// // const addArrow=(a,b)=>a*b;

// // Hoisting and TDZ in Practice
// // Variables
// // console.log(me);
// // console.log(job);
// // console.log(year);
// // var me = 'Jonas';
// // let job = 'teacher';
// // const year = 1991;
// // Functions
// // console.log(addDecl(2, 3));
// // // console.log(addExpr(2, 3));
// // console.log(addArrow);
// // // console.log(addArrow(2, 3));
// // function addDecl(a, b) {
// //   return a + b;
// // }
// // const addExpr = function (a, b) {
// //   return a + b;
// // };
// // var addArrow = (a, b) => a + b;
// // // Example
// // console.log(undefined);
// // if (!numProducts) deleteShoppingCart();
// // var numProducts = 10;
// // function deleteShoppingCart() {
// //   console.log('All products deleted!');
// // }
// // var x = 1;
// // let y = 2;
// // const z = 3;
// // console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(z === window.z);

// // The this Keyword in Practice
// // console.log(this);
// // const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// // calcAge(1991);
// // const calcAgeArrow = birthYear => {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// // calcAgeArrow(1980);
// // const jonas = {
// //   year: 1991,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.year);
// //   },
// // };
// // jonas.calcAge();
// // const matilda = {
// //   year: 2017,
// // };
// // matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();
// // const f = jonas.calcAge;
// // f();

// // Primitives vs. Objects in Practice
// // Primitive types
// // let lastName = 'Williams';
// // let oldLastName = lastName;
// // lastName = 'Davis';
// // console.log(lastName, oldLastName);
// // // Reference types
// // const jessica = {
// //   firstName: 'Jessica',
// //   lastName: 'Williams',
// //   age: 27,
// // };
// // const marriedJessica = jessica;
// // marriedJessica.lastName = 'Davis';
// // console.log('Before marriage:', jessica);
// // console.log('After marriage: ', marriedJessica);
// // // marriedJessica = {};
// // // Copying objects
// // const jessica2 = {
// //   firstName: 'Jessica',
// //   lastName: 'Williams',
// //   age: 27,
// //   family: ['Alice', 'Bob'],
// // };
// // const jessicaCopy = Object.assign({}, jessica2);
// // jessicaCopy.lastName = 'Davis';
// // jessicaCopy.family.push('Mary');
// // jessicaCopy.family.push('John');
// // console.log('Before marriage:', jessica2);
// // console.log('After marriage: ', jessicaCopy);



// //set
// const orderset=new Set([
// 'pizza',
// 'burger',
// 'pasta',
// 'risotte',
// 'pizza',
// 'pasta'

//     ]
// );
// console.log(orderset);
// console.log(new Set('shoeab'));
// console.log(orderset.size);
// console.log(orderset.has('pizza'));
// console.log(orderset.has('bread'));
// orderset.add('garlic bread');
// orderset.add('garlic bread');;
// console.log(orderset);
// orderset.delete('garlic bread');
// console.log(orderset);
// const staff=['waiter','manager','chef','waiter','manager'];
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);


// //maps
// const rest=new Map();
// rest.set('name','shoeab');
// rest.set('desg','trainee');
// rest.set('state','maharashtra');
// console.log(rest);
// rest
// .set(1,'korpawali');
//  console.log(rest.set(2,'jalgaon'));
//  console.log(rest.set('categories',['kamala','raju','srikanth','pawan']));


//  //maps
//  const ques=new Map([
// ['question','which is the best programming languge in the world'],
// [1,'c'],
// [2,'c++'],
// [3,'java'],
// [4,'python'],
// ['correct',3],
// ['true','correct'],
// ['false','try again later'],

//  ]);
//  console.log(ques);

//  //string
//  const airline='air india';
//  const plane='A328';
//  console.log(plane[0]);
//  console.log(plane[1]);
//  console.log(plane[2]);
//  console.log(airline.length);
//  console.log(airline.lastIndexOf('a'));
//  console.log(airline.slice(4));
 
//  //check the middle seat
//  const middleSeat=function(seat)
//  {
// const s=seat.slice(-1);
// if(s==='B' || s==='E')
// {
//     console.log('you got Middle seat...');

// }else{
//     console.log('you luckily got window seat');
// }
//  }
//  middleSeat('44E');
//  middleSeat('34C');
//  middleSeat('23B');
 


//  //changing the case of String
//  console.log(airline.toUpperCase());
//  console.log(airline.toLowerCase());

//  //fix capitalization in name
//  const name='sHoEaB';
//  const lower=name.toLowerCase();
//  const firstUpper=lower[0].toUpperCase()+lower.slice(1);
//  console.log(firstUpper);


//  //fix captalization using function
//  const passenger=function(pas)
//  {
//     const lowerCase=pas.toLowerCase();
//     const correct=lowerCase[0,5].toUpperCase()+lowerCase.slice(5);
//     console.log(correct);
//  }
//  passenger('saKib');
//  passenger('anEEs');

//  //comparing emails
//  const email='shoeab@hello.io';
//  const login='    ShoEab@Hello.io   ';
// const lowerEmail=login.toLowerCase();
// const emailTrimmed=lowerEmail.trim();
// console.log(emailTrimmed);
// //second option
// const lowerMail=login.toLowerCase().trim();
// console.log(lowerMail);

// //replacing
// const priceInd='288,66@'
// const priceUS=priceInd.replace('@','$').replace(',','.');
// console.log(priceUS);

// //replaceAll 
// const pass='we request to all passenger to come to onboard on the door 23.on the door 23!!!!';
// const pass1=pass.replace('door','gate');
// const pass2=pass.replaceAll('door','gate');
// console.log(pass);
// console.log(pass2);


// //boolean
// const plan='Airbus A23neo'
// console.log(plan.includes('A234'));
// console.log(plan.includes('222'));
// console.log(plan.startsWith('Air'));
// console.log(plan.startsWith('A234'));
// console.log(plan.endsWith('WE'));
// if(plan.startsWith('Airbus')&& plan.endsWith('neo'))
// {
//     console.log('welcome to the part of airbus S23neo');
// }


// //practice exercise
// const baggage=function(items){
// const check=items.toLowerCase();
// if(check.includes('laptop')|| check.includes('knife')|| check.includes('gun'))
// {
//     console.log('you are not allowed to on board')

// }else{
//     console.log('Welcome aboard');
// }
// }
// baggage('I have an laptop,and I have knife');
// baggage('I have an camera and some snacks');
// baggage('gun for protection');

// //split method
// const msg=('a+very+good+string'.split('+'));
// console.log(msg);


// //padding
// const mess='shoeab patel'
// console.log(mess.padStart(25,'+'));
// console.log(mess.padStart(25,'+').padEnd(30,'+'));

// //hide numbers using padstart and slice
// const maskcreditcard=function(number)
// {
//     const str=number+'';
//     const last=str.slice(-4);
//     return last.padStart(str.length,'*');

// }
// console.log(maskcreditcard(54435455466));
// console.log(maskcreditcard(34343543));
// console.log(maskcreditcard(534543543535454));

// //repeat method
// const mesg='bad weather all flights are delayed,sorry for inconvenient';
// const msg1=mesg.repeat(5);
// console.log(msg1);

// //default parameter
// const bookings=[]
// const createBooking=function(flightNum,numPassenger=1,price=199)
// {
//     const booking={
//         flightNum,
//         numPassenger,
//         price,
//     };
//     console.log(bookings);
//     bookings.push(booking);
// }
// createBooking('A123');
// createBooking('A444',3,433);
// createBooking('A232');


// //how to passing argument works
// const flight='A5646';
// const data={
//     nm:'shoeab patel',
//     passport:'12345678910',
// };
// const checkIn=function(flightNum,passenger)
// {
//     flightNum='A3333';
//     passenger.nm='mr' +passenger.nm;
//     if(passenger.passport==='12345678910')
//     {
//         alert('checkIn')
//     }else{
//         alert('incorrrect passpost');
//     };
// }
// checkIn(flight,data);
// console.log(flight);
// console.log(data)

//self invoked function expression()
const runOnce=function()
{
    console.log('this code will not run again..')
}
runOnce();
(function(){
    console.log('this code will not run again,..');
})();

(()=>{console.log('This will also will not run again')})();