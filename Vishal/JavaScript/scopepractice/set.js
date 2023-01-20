const data = new Set([
  "hii",
  "hello",
  "hii",
  "good",
  "morning",
  "today",
  "hello",
]);

console.log(data);

//different
console.log(data.size);

//one type of include
console.log(data.has("dell"));
console.log(data.has("hii"));

data.add("gujarat");
console.log(data);
data.delete("gujarat");
console.log(data);

const arr = ["hi", "hello", "good"];
const print = [...new Set(arr)];
console.log(print);
