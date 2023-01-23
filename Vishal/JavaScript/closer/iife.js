function fn() {
  console.log("object");
}
(function () {
  console.log("object1");
})();
console.log(fn());
