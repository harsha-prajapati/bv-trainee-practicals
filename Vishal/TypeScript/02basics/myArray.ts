const superHeros: string[] = [];
// const heroPower: number[] = []
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [[255, 255, 255], []];
console.log(MLModels);
console.log(superHeros);
superHeros.push("spiderman");
console.log(superHeros);
heroPower.push(2);
console.log(heroPower);

allUsers.push({ name: "", isActive: true });
console.log(allUsers);

export {};
