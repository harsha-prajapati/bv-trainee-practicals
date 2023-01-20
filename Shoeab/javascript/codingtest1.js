// //test1
// // const markwt=78;
// // const markht=1.69;
// // const johnwt=92;
// // const johnht=1.95;
// // const bmicompare=bmiMark>bmiJohn;
// // const bmiMark=(markwt/markht**2);
// // const bmiJohn=(johnwt/johnht**2);
// // console.log(bmiMark,bmiJohn);
// // console.log(bmicompare);

// test2
// const massMark=95;
// const heightMark=1.88;
// const massJohn=85;
// const heightJohn=1.76;
//const bmicompare=bmiMark>bmiJohn;
// const bmiMark=(massMark/heightMark**2);
// const bmiJohn=(massJohn/heightJohn**2);
// console.log(bmiMark,bmiJohn);
//console.log(bmicompare);


//String example
// let firstname="shoeab";
// let age=23;
// let job="trainee engineer"
// let info="i'm " +firstname +', and i am ' +age + ' years old ' +'i am work as ' +job;
// console.log(info);


// let firstname="shoeab";
// const birthyear=1999;
// let job="trainee engineer"
// const currentyear=2023;
// let info=`I'm ${firstname},and i am ${(currentyear-birthyear)} years old, i work as ${job}`;
// console.log(info);

// test2
//  const massMark=95;
//  const heightMark=1.88;
//  const massJohn=85;
//  const heightJohn=1.76;
//  const bmiMark=(massMark/heightMark**2);
//  const bmiJohn=(massJohn/heightJohn**2);
//  console.log("marks EMI "+ ' '+bmiMark,"johns EMI " +' '+bmiJohn);
//  if(bmiMark>bmiJohn)
//  {
// console.log(`marks bmi ${bmiMark} is greater than john BMI (${bmiJohn})`);
//  }
//  else{
//     console.log(`johns emi: ${bmiJohn} is greater than marks EMI: ${bmiMark} `);
//  }
 
//switch
//  const day='';
//  switch(day)
//  {
//    case 'monday':
//          console.log('plan to complete course');
//          console.log('and doing some practice on it');
//          break;
//    case 'tuesday':
//       console.log('learning the javsacript cncepts');
//       break;
//    case 'wednesday':
//          console.log('doing some practice on javascript');
//          break;
//    case 'thursday':
//       console.log('revision of all the topics');
//       break;
//    case 'friday':
//       console.log('doing some practice on web developement');
//       break;
//    case 'saturday':
//    case 'sunday':
//       console.log('enjoy the weekend ');
//       break;
//    default:
//      console.log ('invalid day that you find');
//  }

//using if else
// const day='';
// if(day=='monday')
// {
//    console.log('plan to complete course');
//    console.log('and doing some practice on it');
// }else if(day=='tuesday')
// {
//    console.log('learning the javsacript cncepts');
// }else if(day=='wednesday')
// {
//    console.log('doing some practice on javascript');
// }else if(day=='thursday')
// {
//  console.log('revision of all the topics');

// }else if(day=='friday')
// {
//    console.log('doing some practice on web developement');
// }else if(day=='saturday' || day=='sunday')
// {
//    console.log('enjoy the weekend ');
// }else{
//    console.log('invalid day');
// }


//turnary operator
// const age=15;
// let drive=age>=18 ? 'drive' :'your AGE is not completed';
// console.log(drive);

//functions
// function blogger()
// {
//    console.log('this is the first program using function');
// }
// blogger();
// blogger();
// blogger();
// blogger();

//parameterized function
// function fruits(apples,oranges)
// {
//    const juice=`juice with ${apples} apples and ${oranges} oranges`;
//    return juice;
// }
// const applejuice=fruits(5,0);
// console.log(applejuice);
// const appleorangeJuice=fruits(3,4);
// console.log(appleorangeJuice);

//function declaration
// function calcage(birthyear)
// {
//    return 2023-birthyear
// }
// const age1=calcage(1999);


//function expression
// const calcage1=function(birthyear)
// {
//    return 2023-birthyear;
// }
// const age2=calcage1(1999);
// console.log(age1,age2);

//Arrow Function
// const calcage3=birthyear=>2023-birthyear
// const age3=calcage3(1999);
// console.log(age3);

// const retirement=(birthyear,firstname)=>{
// const age=2023-birthyear;
// const retireage=65-age;
// return console.log(`${firstname} is retired in ${retireage} of years`);
// }
// retirement(1999,'Shoeab');
// retirement(2003,'sakib');
// retirement(1996,'arabaz');



//function calling another function

// function fruitjuice(fruit)
// {
//     return fruit*4;
// }
// function fruitprocessor(apple,oranges)
// {
//     const applejuice=fruitjuice(apple);
//     const orangejuice=fruitjuice(oranges);
//     const juice=`juice with ${applejuice} apples and the ${orangejuice} oranges`;
// return juice;
// }

// console.log(fruitprocessor(2,3));


//arrays
// const friend1='abc';
// const friend2='def';
// const friend3='ghi';
// console.log(friend1);
// console.log(friend2);
// console.log(friend3);
// const friends=['shoeab','amit','shrikant','pavan'];
// console.log(friends[1]);


//for loop 
for(let i=1;i<=10;i++)
{
    console.log(`weight lifting repetition is ${i}`);
}