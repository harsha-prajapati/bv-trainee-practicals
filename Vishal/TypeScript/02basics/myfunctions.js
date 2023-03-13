"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello"
}
var myValue = addTwo(5);
console.log(myValue);
function getUpper(val) {
    console.log(val);
    return val.toUpperCase();
}
getUpper("Vishal");
function signUpUser(name, email, isPaid) { }
signUpUser("Vishal", "Vishal@lco.dev", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
var result = heros.map(function (hero) {
    return "hero is " + hero;
});
console.log(result);
var statricmessage = "this is a error msg";
function consoleError(statricmessage) {
    console.log(statricmessage);
}
consoleError(statricmessage);
function handleError(statricmessage) {
    throw new Error(statricmessage);
}
console.log(handleError);
