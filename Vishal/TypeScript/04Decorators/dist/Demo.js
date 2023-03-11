"use strict";
//only use in class
//function name start with capital
//property,method ,class uper call
//function can take atlest one argument as a constructor
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Deco(constructor: Function) {
//   console.log(constructor);
//   console.log("Deco Call......");
// }
// @Deco
function Deco() {
    //always return one function
    return function (_) {
        console.log("Deco Call......");
    };
}
function Fillhtml(template, id) {
    return function (_) {
        var ele = document.getElementById(id);
        if (ele) {
            ele.innerHTML = template;
        }
        else {
            alert("Template Not Found");
        }
    };
}
function Checkcall() {
    //always return one function
    return function (_) {
        console.log("Check Call......");
    };
}
function Checkcalla() {
    //always return one function
    return function (_) {
        console.log("Check Calla......");
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "vishal";
        console.log("Person Call.....");
    }
    Person = __decorate([
        Fillhtml("<h1 style=color:blue>Decorators Example</h1>", "app"),
        Deco(),
        Checkcalla(),
        Checkcall()
    ], Person);
    return Person;
}());
var names = new Person();
// -----------Instance of object: The object for which we want to add property.
//the Greeter Class instance is stored in the target variable.
// -----------propertyName: The name of the property
// ---------Configuration Object: It is an object with specifications of property.
//we will add the getter and setter function as the specification.
function ModifyMessage(sender) {
    return function (target, propertyKey) {
        var modifiedMessage;
        // Return modifiedMessage whenever the message is asked
        var getter = function () {
            return modifiedMessage;
        };
        // Set the modifiedMessage value
        var setter = function () {
            modifiedMessage = "Hello from " + sender + "!";
        };
        // Overwrite the original message with
        // modifiedMessage we just created
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
ModifyMessage("");
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstMessage = "Hi there!";
        this.secondMessage = "Hi there!";
    }
    Greeter.prototype.greet = function () {
        console.log("first message: " + this.firstMessage);
        console.log("second message: " + this.secondMessage);
    };
    __decorate([
        ModifyMessage("ModifyMsg")
    ], Greeter.prototype, "firstMessage", void 0);
    return Greeter;
}());
var myGreeter = new Greeter();
myGreeter.greet();
