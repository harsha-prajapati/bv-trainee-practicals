function add(n1:number,n2:number)
{
    return n1+n2;
}
function printResult(num:number):void
{
    // return console.log(num);
console.log('result is:'+num);
}
printResult(add(5,6));//it produce proper result
// console.log(printResult(add(5,6)));it produce undefined in output
let combineValues;
combineValues=add;
console.log(combineValues(7,7));

