/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property

*/
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 3,
  neighbours: ["bangla", "srilanka", "nepal"],
  describe: function () {
    console.log(`${this.country} has 6 million ${this.country}speaking people,
  3 neighbouring countries ${this.neighbours}and a capital called ${this.capital}`);
  },
};
myCountry.describe();
console.log(myCountry);
