/*
Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const data=population=>(population / 7900)* 100;

const new1 = data(4545);
console.log(new1);