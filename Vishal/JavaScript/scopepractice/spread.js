let abc = ["abc", "pqr"];

console.log(...abc, "xyz");

const ecommerce = {
  name: ["samsung s22", "iphone14 pro max"],
  compney: ["samsung", "apple"],
  price: [98999, 138999],
};

let data = [...ecommerce.name, "iphone"];
console.log(data);

const restop = [1, 2, 3, 4];

const [first, ...rest] = restop;
console.log(first, rest);

// console.log(0, 1, ...restop);

//sortcircit
console.log(3 || "Orange");
console.log("" || "Orange");
console.log(true || 0);
console.log(undefined || null);
