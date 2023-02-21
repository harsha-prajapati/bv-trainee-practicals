//using normal function
function user1(data:string):string
{
    return data;
}
console.log(user1('99'));
// console.log(user1(99)); if we take here number argument then it shows error


//using generic
function user<T>(data:T):T{
    return data;
}
console.log(user(222)); //we take numeric data
console.log(user('shoeab'));//we take string data
console.log(user({name:'shoeab',age:23})) //we also take object in it