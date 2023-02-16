function addTwo(num: number): number {
  return num + 2;
  //return "hello"
}

let myValue = addTwo(5);
console.log(myValue);

function getUpper(val: string) {
  console.log(val);
  return val.toUpperCase();
}
getUpper("Vishal");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("Vishal", "Vishal@lco.dev", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("h", "h@h.com");

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

const result = heros.map((hero): string => {
  return `hero is ${hero}`;
});
console.log(result);

const statricmessage: string = "this is a error msg";

function consoleError(statricmessage: string): void {
  console.log(statricmessage);
}
consoleError(statricmessage);

function handleError(statricmessage: string): never {
  throw new Error(statricmessage);
}
console.log(handleError);
export {};
