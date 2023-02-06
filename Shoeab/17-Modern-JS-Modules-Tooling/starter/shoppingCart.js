//exporting modules
console.log('exporting modules');
const shipping=10;
export const cart=[];
export const addToCart=function(product,quantity){
    console.log(`${quantity} ${product} added to cart `);
  
};
   const totalPrice=222;
    const totalQuantity=120;
    export {totalPrice,totalQuantity as tq};
export default function(product,quantity){
    console.log(`${quantity} ${product} added to cart `);
    cart.push({product,quantity});
};


