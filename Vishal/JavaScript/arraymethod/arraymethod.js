let arr = [5, 10, 15, 20, 25, 30];
let newar = [15, 65, 55, 85];
console.log(arr.slice(2, 4));

console.log(arr.slice(0, 4));

console.log(arr.slice(1, -2));

arr.splice(1, 1, 500);
console.log(arr);

const mergearr = arr.concat(newar);
console.log(mergearr);

const joinex = arr.join("*");
console.log(joinex);
