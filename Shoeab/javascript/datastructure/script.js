const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
};


const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
console.log(a,b,c);

const[h,i,j]=arr;
console.log(h,i,j);
const [first, ,second]=restaurant.categories;
console.log(first,second);//italian,vegetarian
let [main,,secondary]=restaurant.categories;
// console.log(main,  secondary);
// const temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary);
[main,secondary]=[secondary,main];
console.log(main,secondary);

const [starter,maincourse]=restaurant.order(2,0);
console.log(starter,maincourse);



const nested=[2,4,[5,6]];
// const [m, ,n]=nested;
const[m, , [n,o]]=nested;
console.log(m,n,o);



//default values
const[p,q,r]=[8,9];
console.log(p,q,r);

//we have to assign a default value to avoid undefine are as follows
const[s=1,t=1,u=1]=[4];
console.log(s,t,u);

//Array without usimg spread operator operator
const arrr=[6,7,8];
const copyarr=[1,2,arrr[0],arrr[1],arrr[2]];
console.log(copyarr);
//array using spread operator
const copieArray=[1,2,...arrr];
console.log(copieArray);


//adding in object 
const newMenu=[...restaurant.mainMenu,'gucci'];
console.log(newMenu);

//copy array
const mainMenuCopy=[...restaurant.mainMenu];
console.log(mainMenuCopy);
 

//join two arrays

const menu=[restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);
