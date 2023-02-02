"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // <h4 class="country__capital"><span>Fifa : </span>${data.fifa}</h4>
//     renderCountry(data);
//   });
// };

const renderCountry = function (data, className = "") {
  const html = `
 
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name} </p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name} ${
    data.currencies[0].symbol
  }</p>
    <h4 class="country__region"><span>Capital : </span>${data.capital}</h4>
    <h4 class="country__region"><span>NativeName : </span>${
      data.nativeName
    }</h4>
  </div>
</article>
`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
// const getCountryNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const neighbour1 = data.borders;
//     for (let data2 of neighbour1) {
//       let neighbour = data2;
//       if (!neighbour) return;

//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);

//       request2.send();

//       request2.addEventListener("load", function () {
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2, "neighbour");
//       });

//       // <h4 class="country__capital"><span>Fifa : </span>${data.fifa}</h4>.
//     }
//   });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
  console.log(country);

  const neighbour = data[0].borders[1];
  if (!neighbour) return;
};
getCountryData("Paraguay");
// getCountryNeighbour("Bharat");
// getCountryData("germany");
// getCountryData("Marshall Islands");
// getCountryData("USA");
// getCountryData("Paraguay");
// getCountryData("portugal");
// getCountryData("peru");
