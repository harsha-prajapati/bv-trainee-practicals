// const User = {
//     name: "Vishal",
//     email: "Vishal@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Vishal", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "h@gmail.com";
type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  cardDate: number;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let bankDeatail: cardDetails = {
  cardnumber: 123456898545,
  cardDate: 2022,
  cvv: 256,
};

// myUser._id = "asa"
console.log(myUser);
console.log(bankDeatail);
export {};
