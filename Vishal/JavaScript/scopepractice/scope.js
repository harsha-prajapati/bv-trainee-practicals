const a = 10;

function add() {
  //   let b = 20;
  const b = 20;
  console.log(a + b);

  function sub() {
    let c = 30;
    console.log(a - b - c);
  }
  sub();
}
// console.log(b);
add();
