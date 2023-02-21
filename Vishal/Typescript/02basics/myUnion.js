"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var Vishal = { name: "Vishal", id: 334 };
Vishal = { username: "hc", id: 334 };
console.log(Vishal);
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
console.log(data, data2, data3, seatAllotment);
