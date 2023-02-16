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
