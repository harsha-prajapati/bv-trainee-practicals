let selection = prompt("select opertion +,-,*,/");

let value1 = parseFloat(prompt("enter first number"));
let value2 = parseFloat(prompt("enter secound number"));

if (selection == "+") {
  add = value1 + value2;
} else if (selection == "-") {
  add = value1 - value2;
} else if (selection == "*") {
  add = value1 * value2;
} else if (selection == "/") {
  add = value1 / value2;
} else {
  prompt = "please select some option";
  console.log("please select some option");
}
alert(`${value1} ${selection} ${value2} = ${add}`);

const addtion = function () {
  const value = {
    value1: parseFloat(prompt("enter first number")),
    value2: parseFloat(prompt("enter secound number")),
  };
  const answer = value.value1 + value.value2;
  return answer;
};

const sub = function () {
  const value = {
    value1: parseFloat(prompt("enter first number")),
    value2: parseFloat(prompt("enter secound number")),
  };
  const answer = value.value1 - value.value2;
  return answer;
};

console.log(addtion());
console.log(sub());
