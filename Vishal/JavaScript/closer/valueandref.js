//premitive use pass by value

let a = 10;
let b = a;
b = a + 10;
console.log(a, b);

// array and obj use pass by ref

let ab = {
  name: "hii",
};
let xyz = { ...ab };
let abc = ab;

ab.name = "ok";
console.log(ab);
console.log(abc);
console.log(xyz.name);
