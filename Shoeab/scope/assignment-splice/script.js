
//assignment to do 10 program using splice method...
const array1=['vishal','shrikant','shoeab','pavan','amit'];
array1.splice(3);
console.log(array1);
//output ['vishal','shrikant','shoeab']

const array2=['vishal','shrikant','shoeab','pavan','amit'];
array2.splice(3,2);
console.log(array2);
//output 

const array3=['vishal','shrikant','shoeab','pavan','amit'];
array3.splice(2,0,'gudasiva');
console.log(array3);
//output  ['vishal','shrikant','gudasiva','shoeab','pavan','amit']


const array4=['vishal','shrikant','shoeab','pavan','amit'];
array4.splice(2,1,'leela');
console.log(array4);
//output  ['vishal','shrikant','leela','pavan','amit'];

const array5=['vishal','shrikant','shoeab','pavan','amit'];
array5.splice(0,2,'bharat','babu');
console.log(array5);
//output  ['bharat','babu','shoeab','pavan','amit'];

const array6=['vishal','shrikant','shoeab','pavan','amit'];
array6.splice(1,3);
console.log(array6);
//output ['vishal','amit']

const array7=['vishal','shrikant','shoeab','pavan','amit'];
array7.splice(1,0,'sakib','umar');
console.log(array7);
//output 

const array8=['vishal','shrikant','shoeab','pavan','amit'];
array8.splice(1,1,'anas','numan');
console.log(array8);
//output 

const array9=['vishal','shrikant','shoeab','pavan','amit'];
array9.splice(1,2,'akib');
console.log(array9);
//output 

const array10=['vishal','shrikant','shoeab','pavan','amit'];
array10.splice(2,3,'aniket','jayesh','yash');
console.log(array10);
//output 

//map
const arr=[23,44,54];
const a=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1;
})
console.log(a);

//filter method
const arr1=[15,12,1,2,3,4,5,23];
const arr2=arr1.filter((a)=>{
return a<10;
})
console.log(arr2);

//array reduce method
const arr3=[3,5,4,1,6,5]
const newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newarr3);


//every() method
const age=[22,55,12,77,36];
console.log(age);
const c=age.every(checkAge);
console.log(c);
function checkAge(age1){
return age1>=18;
}

//find method
const ages=[22,55,12,77,16];
console.log(age);
const d=age.find(checkchild);
console.log(d);
function checkchild(age2){
return age2<18;
}


//findIndex method

const ages1=[22,55,12,77,16];
console.log(age);
const e=age.findIndex(checkchild);
console.log(e);
function checkchild(age3){
return age3<18;
}
