const car = function(make,speed){
    this.make=make;
    this.speed=speed;
}

const ev=function(make,speed,charge){
    car.call(this,make,speed);
    this.charge=charge ;
}

ev.prototype=Object.create(car.prototype);

ev.prototype.charging=function(chargeTo){
    this.charge=chargeTo;
}
ev.prototype.accelerate=function(){
    this.speed +=20;
    this.charge -=10;
    console.log(`${this.speed} with charge ${this.charge}`);
}
const ele = new ev("ele",100,90);
ele.accelerate(); 


class carr{
    constructor(f,m){
        this.f=f;
        this.m=m;
    }
}
class evv extends carr{ 
    constructor(f,m,n){
        super(f,m);
        this.n=n;
    }


}
const sjjh=new evv("da","asdf","asdasd");
console.log(sjjh.f);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class bank {
    constructor(name,accOn,pin){
        this.name=name;
        this.accOn=accOn;
        this.pin=pin;
    }
}
class accc1 extends bank{
    constructor(name,accOn,pin){
        super(name,accOn,pin);
        this.mail="brain@gmail.com"; 

    }
    depo(val){
        this.amount.push(val);
    }
    withdrw(val){
        this.amount.push(val);
    }
    approv(val){
        console.log("approve");
    }
}
const acccc= new accc1("fddc","ghd","nchj");

acccc.depo(590707);
console.log(acccc.amount); 