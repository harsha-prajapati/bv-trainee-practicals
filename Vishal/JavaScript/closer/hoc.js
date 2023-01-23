const getname = (name) => {
  console.log(`Your name is ${name}`);
  return function city(cityname) {
    console.log(`Your city name is ${cityname}`);
  };
};

getname("vishal")("jamnagar");
getname("abc")("amdavad");
