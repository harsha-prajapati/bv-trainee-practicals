// //importing modules
// import './shoppingCart.js';
// import { addToCart,totalPrice as price,tq } from './shoppingCart.js';

console.log('importing modules')
// addToCart('pizza',5);
// addToCart('burger',7);
// console.log(price,tq);
// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread',6);
// console.log(ShoppingCart.totalPrice);
import add,{cart} from './shoppingCart.js'
add('bread',6);
add('butter',5);
add('milk',4);
console.log(cart)


console.log('start fetching');
const res=await fetch('https://jsonplaceholder.typicode.com/posts');
const data=await res.json();
console.log(data)
