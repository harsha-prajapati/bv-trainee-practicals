'use strict';
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.slice(0,7)); 



// movements.forEach((each,index,array)=>{ // forEach on list gives the values , index, array  
//     console.log(each);
//     console.log(index);
   
// }) 

// currencies.forEach((value,key,array)=>{
//   console.log(`${key} : ${value} `);
// })  //  forEach for map objects it gives values,keys,map object

// const newSet= new Set([200, -200, 340, -300, -20, 50, 400, -460]);

// newSet.forEach((value,k,set)=>{
//   console.log(`${value} , ${k}`);
  
// });  // forEach for sets its gives only values and set object it 

// // map  the major advantage is its gives new array itself instead of pushing externally into seperate list 
// const numArray=[200, -200, 340, -300, -20, 50, 400, -460];

// const account = numArray.filter((i)=>{
//   return i*34;
// });
// console.log(account); 

// const str = "asd bbjbn bksdkvsd dsakhdvkd vdkefef dglgeikgae vahdfsi";
// const neStr=str.split(" ").map((x)=>{ 
//   let [v,...others]=x;
//   return [v.toUpperCase(),...others].join("");

// });
// console.log(neStr); // the first letter to capital case  

// const Filter = "asD VbjbN bksdkvsD Bsakhdvkd Mdkefef dglgeikgae Kahdfsi";

// const newFilter= Filter.split(" ").filter((each)=>{
//   let [v,...others]=each.split("").reverse();
//   return v === v.toUpperCase();
// });
// console.log(newFilter); // filters the words ENDS with capital case 


// // reduce  

// const reduceList= [200, -200, 340, -300, -20, 50, 400, -460];

// const redused = reduceList.reduce((a,c,i)=> a+c,);
// console.log(redused);  // reduce is used to find the sum of the array 

// const maximumValue=reduceList.reduce((a,c)=>{
//   if(a>c) {
//     return a;
//   }
//   else{
//     return c;
//   }
// })
// console.log(maximumValue); // reduce is used find the maximum value in the array  

// // coding challenge 

// data1=[5,2,4,1,15,8,3];




// const calcuDogAge = data1.map((val)=>{ if(val<=2){
//   return val*2;
// }
// else{
//   return 16+val*4;
// }}); 

// const filtering= calcuDogAge.filter((each)=>{
//   if(each>=18)
//     return each
// });


// const reducer=filtering.reduce((acc,cur)=>{ return acc+cur});

// console.log(reducer/(filtering.length)); 

// for (let i of data1){
//   console.log(i);
// }


//----------- today ----------

//Find Index
let moments = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(moments.findIndex(data=> data > 450));

//Some
const numbers = [1, 2, 3, 4, 5,100];
console.log(numbers.includes(15));
const hasLargeNumber = numbers.some(num => num > 6 && num<9);
console.log(hasLargeNumber); // false

//Every 

const numbers123 = [1, 2,-1,100,55,64,-99,-0,4, 3, 4, 5];
const allEven = numbers123.every(num => num % 2 === 0);
console.log(allEven); // false



//Sort 
const numbers2 = [1, 2, -1, 100, 55, 64, -99, -0, 4, 3, 4, 5];
console.log(numbers2.sort((x,y)=> {
  if(x>y ){
    return 1
  }
  else{
    return -1
  }
}));

// find 
const data2=[5,2,-4,1,15,-8,3];
const finding = data2.find((x)=>{
  return x<0 ;
})
console.log(finding) // major difference betweeb the filter and find is it writes only one value that occurs first but in filter it writes all the values that satisfy the condition 


let arr = [-263,7264,948,45,34,4,-443,-4,343,-234,-433,43,-4,-7676,-578,545];
console.log(arr.sort((a,b)=>{
  if (a>b)
    return 5
  else 
    return -1
})); // we write the condition to get sort the list because by default sort method takes the values in the list as strings . 


console.log(arr.fill(123,3,6));   // it fill the 123 from 3 to 6 not includes 6 

const asdasd=Array.from({length:7},() => 1);        

console.log(asdasd); 
















                                                        











