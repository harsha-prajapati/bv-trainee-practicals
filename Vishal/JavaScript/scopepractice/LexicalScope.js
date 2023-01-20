let data = {
  name: "vishal",
  language: ["hindi", "english"],
  city: "jamnagar",
  country: function () {
    console.log(this.city);
    this.language.map(function (item) {
      //   console.log(item);   right
      console.log(this.name);
    });
  },
};
data.country();
