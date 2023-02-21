class Car
{
    color:string;
    constructor(color:string)
    {
        this.color=color;
    }
}
    class Audi extends Car
    {
        price:number;
        constructor(color:string,price:number)
        {
            super(color);
            this.price=price;
        }
        display():void
        {
            console.log('color of audi car:'+this.color);
            console.log('price of audi car:'+this.price)

        } 

    }
    let obj=new Audi('black',349494949449);
    obj.display();
