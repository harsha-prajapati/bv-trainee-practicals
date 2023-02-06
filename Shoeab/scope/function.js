// // Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
//   };
//   transformer('JavaScript is the best!', upperFirstWord);
//   transformer('JavaScript is the best!', oneWord);
//   // JS uses callbacks all the time
//   const high5 = function () {
//     console.log('👋');
//   };
//   document.body.addEventListener('click', high5);
//   ['Jonas', 'Martha', 'Adam'].forEach(high5);




  // Functions Returning Functions
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  const greeterHey = greet('Hey');
  greeterHey('Jonas');
  greeterHey('Steven');
  greet('Hello')('Jonas');
  // Challenge
  const greetArr = greeting => name => console.log(`${greeting} ${name}`);
  greetArr('Hi')('Jonas');
  





  // The call and apply Methods
  const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  const book = lufthansa.book;
  // Does NOT work
  // book(23, 'Sarah Williams');
  // Call method
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  book.call(lufthansa, 239, 'Mary Cooper');
  console.log(lufthansa);
  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };
  book.call(swiss, 583, 'Mary Cooper');
  // Apply method
  const flightData = [583, 'George Cooper'];
  book.apply(swiss, flightData);
  console.log(swiss);
  book.call(swiss, ...flightData);
  
  
  // The bind Method
  // book.call(eurowings, 23, 'Sarah Williams');
  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  const bookLX = book.bind(swiss);
  bookEW(23, 'Steven Williams');
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Jonas Schmedtmann');
  bookEW23('Martha Cooper');
  // With Event Listeners
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
  };
  // lufthansa.buyPlane();
  

  //apply method
  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Shoeab",
    lastName: "Patel"
  }
  
  console.log(person.fullName.apply(person1, ["ahmdabad", "India"]));
  
  //call method
  const per = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const per1 = {
    firstName:"sakib",
    lastName: "patel"
  }
  
  console.log(per.fullName.call(per1, "maharashtra", "India"));

//yesterday's question
const data = '   Harsha Prajapathi  ';
let [firstname, ...lastname] = data.trim().split(' ');

console.log(
  firstname.toUpperCase(),
  ...lastname
  // .slice(0,-1),
  // (lastname.slice(-1)[0]).toUpperCase()
);