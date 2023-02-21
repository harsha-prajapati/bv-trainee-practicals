"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
  
    <article class="country">
    <img class="country__img" src="${data.thumbnail}" />
    <div class="country__data">
      <h3 class="country__name">${data.title}</h3>
      <h4 class="country__region">${data.description}</h4>
  
    
      <h4 class="country__region"><span>Price : </span>${data.price} $ </h4>
      <h4 class="country__region"><span>Rating : </span>${data.rating}</h4>
    </div>
  </article>
  `;
  console.log(data);
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
// const getCountryData = function (id) {
//   fetch(`
//   https://dummyjson.com/products/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data);

//       console.log(id);
//     });
// };

// getCountryData(1);
// getCountryData(2);
// getCountryData(4);
// getCountryData(5);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Loading.........");
  }, 3000);
});

myPromise.then(alert);

function example() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  try {
    const result = await example();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

asyncCall();

const getCountryData = async function (id) {
  alert("start loading");
  const res = await fetch(` https://dummyjson.com/products/${id}`);
  const data = await res.json();
  renderCountry(data);
  alert("end loading");
};
getCountryData(1);
// getCountryData(2);
// getCountryData(4);
// getCountryData(5);
