const numbers = [1, 2, 3, 4];
const inc = numbers.map((item) => item + 1);
console.log(inc);

const datas = [
  {
    name: "java",
    city: "rajkot",
  },
  {
    name: "jjs",
    city: "hjfc",
  },
];

const array = datas.map((item) => console.log(item.name));

let checkcity = datas
  .filter(function (datas) {
    return datas.city === "abu dhabi";
  })
  .map(function (datas) {
    return datas.city;
  });
console.log(`Basketball Players are:${checkcity}`);
