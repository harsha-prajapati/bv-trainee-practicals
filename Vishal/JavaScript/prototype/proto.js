// Constructor
const Person = function (age, birthYear) {
  this.age = age;
  this.birthYear = birthYear;
};

const jonas = new Person(23, 1998);

const abcd = new Person(24, 1999);
console.log(jonas, abcd);
console.log(jonas instanceof Person);

// Prototype
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

abcd.calcAge();

//we can add the properties also using prototype

Person.prototype.species = "Homo Sapiens";
console.log(abcd.species);

console.log(abcd.hasOwnProperty("age"));

//Coding Challenege 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("Bmw", 120);
const mercedes = new Car("Mercedes", 95);

Car.prototype.accrl = function () {
  console.log((this.speed += 10));
};
Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};
console.log(bmw);
bmw.accrl();

bmw.accrl();
bmw.accrl();
bmw.brake();
//classes in the Es6

class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const sa = new Person1("abcd", "xyz");
console.log(sa);
sa.fullName();

console.log(sa.__proto__ === Person1.prototype);
console.log(sa.__proto__);

//Getters and Setters

const detail = {
  owner: "Vishal",
  ids: [10, 20, 23, 26, 50],

  get lastId() {
    return this.ids.splice(-1);
  },

  set addId(mov) {
    return this.ids.push(mov);
  },
};
// console.log(detail.lastId);

detail.addId = 100;
console.log(detail.ids);

//static Methods in javascript

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

const result1 = MathHelper.add(2, 3);
console.log(result1); // 5
const result2 = MathHelper.subtract(5, 2);
console.log(result2); // 3
const result3 = MathHelper.multiply(2, 3);
console.log(result3); // 6
const result4 = MathHelper.divide(6, 2);
console.log(result4); // 3

//Object.create
const proo = {
  greeting: "My name is Vishal",
};

const obj = Object.create(proo);
console.log(obj.greeting);

//Coding challenge 2

class car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get inMile() {
    return this.speed / 1.6;
  }
  set dataMile(data) {
    this.speed = data * 1.6;
  }
}

const ford = new car2("Ford", 120);
console.log(ford.inMile);
ford.speed = 50;
console.log(ford.speed);

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//  console.log(acc1.#movements);
//  console.log(acc1.#pin);
//  console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
