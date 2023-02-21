function Logger(constructor:Function)
{
    console.log('logging....')
    console.log(constructor)
}
@Logger
class Person1{
    name='shoeab'
    constructor()
    {
        console.log('creating a person objects.....')
    }
}
const pers=new Person1();
console.log(pers)