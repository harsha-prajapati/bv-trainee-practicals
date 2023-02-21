
//Using type combinable
type combinable=number|string;
type conversionDescriptor='as-number'|'as-text'
//union typee 
// function combine(input1:number|string,
//     input2:number|string,
//     resultConversion:'as=number'|'as-text')
function combine(input1:combinable,
    input2:combinable,
    resultConversion:conversionDescriptor)


{
    let result;
    
    if(typeof(input1)==='number'&&typeof(input2)==='number'||resultConversion==='as-number')
{
    result= +input1+ +input2;
}
else{
    result=input1.toString()+input2.toString()
}
return result;
// if(resultConversion==='as-number')
// {
//     return +result;
// }else{
//     return result.toString();

// }

}
{

}
const comnineAge=combine(22,33,'as-number');
console.log(comnineAge);
const combineStringAge=combine('22','33','as-number');
console.log(combineStringAge);
const combineName=combine('shoeab','patel','as-text');
console.log(combineName);