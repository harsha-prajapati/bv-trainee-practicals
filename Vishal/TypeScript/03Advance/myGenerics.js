"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
identityOne(2);
function identityTwo(val) {
    return val;
}
identityTwo(2);
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour("name");
identityFour({ brand: "brand", type: 1 });
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
var Val = {
    name: "vishal",
    author: "vishal",
    subject: "ts",
};
console.log(Val.subject);
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
var sell = new Sellable();
sell.addToCart(2);
sell.cart[5];
console.log(sell);
