"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var vSeat = SeatChoice.AISLE;
var VseatF = SeatChoice.FOURTH;
var vSeatW = SeatChoice.WINDOW;
console.log(vSeat);
console.log(vSeatW);
console.log(VseatF);
// Harsha Prajapati4:26 PM
// enum StatusEnum{
//  ACTIVE = 'Active'
// INACTIVE = 'Inactive
// }
// User list, CMS list, Email list
// Harsha Prajapati4:28 PM
// if(status === 'Active') green
// If(status === 'Inactive') red
// Harsha Prajapati4:29 PM
// if(status === StatusEnum.ACTIVE) green
// If(status === StatusEnum.INACTIVE) red
// enum StatusEnum{
//  ACTIVE = 1
// INACTIVE = 2
// }
