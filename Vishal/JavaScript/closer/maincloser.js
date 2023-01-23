function fn() {
  let name = "vishal";
  function disname() {
    console.log(name);
    function innerdisplay() {
      name = "lmn";
      console.log(name);
      name = "abc";
      return innerdisplay;
    }
  }
  name = "xyz";
  return disname;
}
let ab = fn();
ab();
