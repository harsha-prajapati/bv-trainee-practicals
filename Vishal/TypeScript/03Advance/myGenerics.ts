const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
identityOne(2);
function identityTwo(val: any): any {
  return val;
}
identityTwo(2);

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}
identityFour("name");
interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "brand", type: 1 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(2, {});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

var Val: Course = {
  name: "vishal",
  author: "vishal",
  subject: "ts",
};

console.log(Val.subject);
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
const sell = new Sellable();
sell.addToCart(2);
sell.cart[5];
console.log(sell);
export {};
