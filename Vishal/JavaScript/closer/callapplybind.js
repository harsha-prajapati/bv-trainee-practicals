// function getemail(fname, lname) {
//   return `${fname}.${lname}@gmail.com`;
// }

// let std = {
//   fname: "vishal",
//   lname: "thakkar",
//   gmail: getemail(this.fname, this.lname),
// };
// let teacher = {
//   fname: "abc",
//   lname: "xyz",
// };
// console.log(std.getemail);
// ans undefine
//normal fun not work

function getemail() {
  return `${this.fname}.${this.lname}@gmail.com`;
}

function lern(s1, s2) {
  return [s1, s2];
}
let std = {
  fname: "vishal",
  lname: "thakkar",
};
let teacher = {
  fname: "abc",
  lname: "xyz",
};
console.log(getemail.call(std));

console.log(lern.apply(teacher, ["eng", "mat"]));
// console.log(getemail.bind(std));
let again = getemail.bind(std);
console.log(again());
