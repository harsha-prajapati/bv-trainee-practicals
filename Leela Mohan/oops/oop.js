'use strict';

const Person = function(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
};

const mohan = new Person ('mohan', 1998);
console.log(mohan);

console.log(mohan instanceof Person);

const unknown = new Person('unknown', 1990);

// Prototypes

console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthyear);
};

mohan.calcAge();
unknown.calcAge();

console.log(mohan.__proto__);
console.log(mohan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mohan));
console.log(Person.prototype.isPrototypeOf(unknown));
console.log(Person.prototype.isPrototypeOf(Person));

// PrototypeOFLinkedObjects

Person.prototype.greet = 'Hello';

console.log(mohan.greet);
console.log(mohan.hasOwnProperty('birthyear'));
// console.log(mohan.hasOwnProperty('calcAge'));
console.log(mohan.hasOwnProperty('greet'));

const arr = [2,4,6,8,7,6,4,2];
console.log(arr.__proto__);

console.log(arr);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

// CC 1

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};

Car.prototype.brake = function() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const BMW = new Car('BMW', 200);
const Audi = new Car('Audi', 180);

BMW.accelerate();
BMW.brake();
BMW.accelerate();

Audi.accelerate();
Audi.brake();
Audi.accelerate();

//ES6 Classes

class PersonCl {
    constructor(firstName, birthyear) {
        this.firstName = firstName;
        this.birthyear = birthyear;
    }

    calcAge() {
        console.log(2023 - this.birthyear);
    }

    greet () {
        console.log(`Hey ${this.firstName}`)
    }
}

const roman = new PersonCl('Roman', 1994);
console.log(roman);
roman.calcAge();
roman.greet();


const acc = {
    owner : 'Rowan',
    mov : [100, 280, 54, 323],

    get latest() {
        return this.mov.slice(-1).pop();
    },

    set latest(newmov) {
        this.mov.push(newmov)
    },
};

console.log(acc.latest);

acc.latest = 99;
console.log(acc.mov);

acc.latest = 100;
console.log(acc.mov);

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthyear);
    },

    rndm(firstname, birthyear) {
        this.firstName = firstname;
        this.birthyear = birthyear;
    },
        

};

const john = Object.create(PersonProto);
// console.log(john);
// john.name = 'John';
// john.birthyear = 1978;
// john.calcAge();

const abcd = Object.create(PersonProto);
// abcd.rndm('abcd', 1988);
// abcd.calcAge();
abcd.rndm = function(firstName, birthyear, course){
    PersonProto.rndm.call(this, firstName, birthyear);
    this.course = course;
};
abcd.intro = function() {
    console.log(`My name is ${this.firstName} and I Pursued ${this.course}`)
}

const xyz = Object.create(abcd);
xyz.rndm('Babu', 1994, 'MCA');
xyz.intro();
xyz.calcAge();

//cc 2

class CarCl {
    constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUs() {
        return this.speed/1.6;
    }

    set speedUs(speed) {
        return this.speed = speed*1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.brake();
ford.speed = 50;
console.log(ford);



// const Person1 = function(firstName, birthyear) {
//     this.firstName = firstName;
//     this.birthyear = birthyear;
// };

// Person1.prototype.calcAge = function () {
//     console.log(2023 - this.birthyear);
// };

// const Student = function (firstName, birthyear, course){
//     Person1.call(this, firstName, birthyear);
//     this.course = course;
// };

// Student.prototype.intro = function() {
//     console.log(`My name is ${this.firstName} and I Pursued ${this.course}`)
// };

// const leela = new Student('Leela', 1998, 'MCA');
// leela.intro()


class PersonCl1 {
    constructor(firstName, birthyear) {
        this.firstName = firstName;
        this.birthyear = birthyear;
    }

    calcAge() {
        console.log(2023 - this.birthyear);
    }

    greet () {
        console.log(`Hey ${this.firstName}`)
    }
}

class StudentCl extends PersonCl1 {
    constructor(firstName, birthyear, course){
        super(firstName, birthyear);
        this.course = course;
    }
    intro() {
        console.log(`My name is ${this.firstName} and I Pursued ${this.course}`)
    }

    calcAge() {
        console.log(`I'm ${2023 - this.birthyear} years old`);
    }
}

const Oduri = new StudentCl('Leela Mohan', 1998, 'MCA');
console.log(Oduri);
Oduri.intro();
Oduri.calcAge();


