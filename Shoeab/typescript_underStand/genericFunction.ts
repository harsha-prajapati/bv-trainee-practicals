// const names:array<string>=[];
// const promise:Promise<number>=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const a=resolve(10);
//     }, 2000);
// })
// promise.then(data=>{
//     // data.split('');
//     console.log(data);
// })


function merge<A,B>(objA:A,objB:B)
// function merge<A extends object,B extends object>(objA:A,objB:B)
// function merge<A extends string,B extends string>(objA:A,objB:B)
// function merge<A extends string|number,B extends string|number>(objA:A,objB:B)
{
    return Object.assign(objA,objB)
}
// console.log({name:'shoeab'},{age:23});
// const mergedObject=merge({name:'shoeab'},{age:23}) as ({name:string,age:number}); without using generics
const mergedObject=merge({name:'shoeab',hobbies:['cricket']},{age:23}) //generics
// const mergedObject2=merge<{name:string,hobbies:string[]},{age:number}>({name:'shoeab',hobbies:['sports']},{age:23}) without using generics

console.log(mergedObject);
// console.log(mergedObject.age);
// console.log(mergedObject2);

//another Generic Function
interface Lengthy
{
    length:number;
}
function countAndDescribe<T extends Lengthy>(element:T):[T,string]
{
    let descriptionText='got no value';

    if(element.length===1)
    {
        descriptionText=('got one element')

    }
    else if(element.length>1){
      descriptionText='got ' +element.length +' elements';
    }
        return [element,descriptionText];

}
console.log(countAndDescribe('shoeab'))



//Key of 
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return 'value:'+obj[key];
}
const a=extractAndConvert({name:'shoeab'},'name'); 
console.log(a);