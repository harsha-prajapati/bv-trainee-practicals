let age = [10, 20, 25, 30];
let ev = [50, 50, 50];

let check = age.find(function find(age) {
  return age > 18; //value
});

let checkin = age.findIndex(function find(age) {
  return age < 18; //only index
});

let checksom = age.some(function find(age) {
  return age > 50; //true or false
});

let checkevry = ev.every(function find(age) {
  return age == 50; //tcheck all element
});

console.log(check);
console.log(checkin);
console.log(checksom);
console.log(checkevry);

let fl = [10, 20, [10, 2, [5, [15]]]];

console.log(fl.flat());
console.log(fl.flat(2));
console.log(fl.flat(Infinity));

var abc = ["ok", "good ok"];
abc = abc.flatMap((fe) => {
  return fe.split(" ");
});
console.log(abc);

let ab = ["abh", "djf", "adsdf", "dsjf", "gsgdh", "zdsjd", "abassdb"];

console.log(ab.sort());
console.log(object);
