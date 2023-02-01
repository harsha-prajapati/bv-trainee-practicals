// "use strict";
// // constructor function  


// const Bmicalc=function(name,age,height,weight){
//     this.name=name;
//     this.age=age;
//     this.height=height;
//     this.weight=weight;
// };

// const Mohan = new Bmicalc("Mohan",23,1.80,72);
// const pavan = new Bmicalc("Pavan",23,1.80,73);
// const babu = new Bmicalc("babu",23,1.70,55);
// Bmicalc.prototype.BMI=function(){
//     const bmi= ((this.weight)/(this.height**this.height));
//     if (bmi < 18.55555){
//         console.log(`under weight ${bmi}`);
//     }else if (bmi >=19 && bmi <=24.9999999){
//         console.log(`NORMAL ${bmi}`);
//     }else if(bmi >=25 && bmi<=29.9999999){
//         console.log(`over weight ${bmi}`);
//     }else if(bmi >30){
//         console.log(`obesity ${bmi}`)
//     }
// }
// Mohan.BMI();
// pavan.BMI();
// babu.BMI();


// console.log("----coding challeng-----")
// // coding challange 

// const car = function(make,speed){
//     this.make=make,
//     this.speed=speed
// }
// car.prototype.accelerate=function(){
//     this.speed=this.speed+10;
//     console.log(`${this.make}: ${this.speed} KMPH`);
// }
// car.prototype.break=function(){
//     this.speed=this.speed-5;
//     console.log(`${this.make}: ${this.speed} KMPH`);
// }
// const BMW=new car("BMW",120);
// const MERCEDES=new car("Mercedes",90);
// BMW.accelerate();
// MERCEDES.break();

// // class 
// console.log("---class---");
// // classes are not hoisted means they cannot call before declared  
// // coding challenge using class 
class Car{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed +=10;
        console.log(`${this.make} : ${this.speed} Km/h`);
    }
    break(){
        this.speed -=5;
        console.log(`${this.make} : ${this.speed} Km/h`)
    }
    get speedUs(){
        this.speed /=1.6; // used to get the values in function 
        return (`${this.make} : ${this.speed} m/h`);
    }
    set SpeedUs(s){  // used to set the propeties that already exists 
        this.speed *=s; // only one parameter is passed to setter 
        
    }
    get onAccelerate(){
        this.speed +=10;
        console.log(`${this.make} : ${this.speed} Km/h`);
    }
    set onbreak(f){
        this.speed -=f;
        console.log(`${this.make} : ${this.speed} Km/h`)
    }
}
const audi = new Car("Audi",100);
console.log(audi.speedUs);

audi.SpeedUs=3; 
console.log(audi.speed);
audi.onbreak=10;

// // 
// const x={
//     cal(){
//         console.log("calling...");
//     },
// };
// const sss = Object.create(x);
// sss.name="bharath" ;
// console.log(sss.name);

// ////////////////////////////////////////////////////////  

// ///// --- inheritance between classes : in constructor functions --- ////////


// const person = function(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
// }
// person.prototype.callAge=function(){
//     console.log(2038-this.birthYear);
// }

// const student = function(firstName,birthYear,course){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
//     this.course=course;
// } 
// //// instead of writing like this we can also write as follows -->
// // const student = function(firstName,birthYear,course){
// //     person.call(this,firstName,birthYear);
// //     this.course=course;
// // } both will give same its knows as ****inheritance*** .... 


// /// **** another metohod of inhertiting ****** //// 

// student.prototype=Object.create(person.prototype); 

// /// now we can access all the properties and methods of the person in student 
// const paribabu=new student("pari",2000,"react");
// paribabu.callAge(); // we get output 38 because here it inherits the all props and methods of person 

// student.prototype.callpari=function(){
//  console.log("my name is pari.....");
// }
// // const parisuddhababu=new person("parisudh",2001);
// // parisuddhababu.callpari(); **** here we have created the person we cannont access the student's methods because its the child of person *****

// console.log(paribabu.__proto__); 



class carcl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} : ${this.speed} km/p`);
        
    }
    break(){
        this.speed -=5;
        console.log(`${this.make} : ${this.speed} km/p`);
       
    }
}
class evcl extends carcl{
    #charge;
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge=charge;
    }
    
    accelerate(){
        this.speed+=20;
        this.#charge -=1;
        console.log(`${this.make} : ${this.speed} km/p with charge : ${this.#charge}`);
        return this ;
    }
    break(){
        this.speed -=5;
        console.log(`${this.make} : ${this.speed} km/p with charge : ${this.#charge}`);
        return this ;
    }
    set chargeBattery(chargeTo){
        this.#charge=chargeTo;
        console.log(this.#charge);
        return this;
        
    }
}
const ele = new evcl("ele",343,232);
ele.break(); 

///////////////////////////////////
const form=document.getElementById("form");

const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map , Mevent;
navigator.geolocation.getCurrentPosition(function(postn){
    const {latitude,longitude}= postn.coords;
    console.log(postn.coords);
    const Coords=[latitude,longitude];
    map = L.map('map').setView(Coords, 18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    map.on("click",function(Mev){
        Mevent=Mev;
        form.classList.remove("hidden");
        inputDistance.focus();
        
    })
    
},function(){
    console.log("error");
}) 
form.addEventListener("submit",function(event){
    event.preventDefault();
    // const {lat,lng}=Mevent.latlng; // destructuring the event object 
    //     const c=[lat,lng]; //getting co-ordinates where we are clicking
        L.marker([24.863972, 91.366419]).addTo(map)
        .bindPopup(L.popup({maxWidth:60,maxHeight:20,autoClose:false,closeOnClick:false,className:"markerss"}))
        .setPopupContent("workout")
        .openPopup();
        inputDistance.value="";
        inputDuration.value="";
        inputCadence.value="";
});

inputType.addEventListener("change",function(){
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");;
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
})
