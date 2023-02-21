function add(num1:number,num2:number,showResult:boolean,phrasemsg:string)

{
    // if(typeof(num1)!=='number' || typeof(num2)!=='number')
    // {
    //     throw new Error('incorrect input');
        
    // }
    if(showResult)
    {
        const output=num1+num2;
        console.log(phrase+output);
    }
    else{
        return num1+num2;
    }
}
const number1=4;
const number2=66.22;
const result1=true;
const phrase='your result is ';
const result=add(number1,number2,result1,phrase);
// console.log(result);


