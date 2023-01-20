const abc = [1, 2, 3];

// const [a, b, c] = abc;
// console.log(abc);

let [a, , c] = abc;
console.log(a, c);

//change the position
[a, c] = [c, a];
console.log(a, c);

//default value
const [p = 1, q = 1, r = 1] = [9];
console.log(p, q, r);
//nested

const nested = [4, 5, [6, 9]];
const [h, , [j, k]] = nested;
console.log(h, j, k);

const res = {
  firstone: ["a", "b", "c"],
  last: ["j", "k", "l"],
  menu: function (first, last) {
    return [this.firstone[first], this.last[last]];
  },
};
console.log(res.menu(1, 2));
