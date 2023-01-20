// const state = {
//   cityname: ["jamnagar", "amdavad", "surat"],
//   population: [4, 6, 5],
// };

// for (const item in state.cityname) console.log(item);

// const country = ["India", "SouthKorea", "NewZeland", "Georgia"];

// const menu = [...country];

// for (const item in menu) console.log(item);

const indiacountry = {
  language: ["hindi", "english"],
};
const show = [...indiacountry.language];
for (const newdata of show) console.log(newdata);

const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
};
const menu = [...restaurant.starterMenu];
for (const item of menu) console.log(item);

//optional chaining
console.log(indiacountry.city?.(0, 1) ?? "not exist");
