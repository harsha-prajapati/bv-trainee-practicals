'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////




// // using callback hell



// //render ufnction for the country data 
const renderCountry=function(data ,className=''){
    const html=`
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/100000).toFixed(0)} Million</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforebegin',html);
    countriesContainer.style.opacity=1;
}





// //AJAX call for country 1
// const countryAndNeighbour=function(country){
// const request= new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v2/name/${country}`);
// request.send();



// //call for the country 1
// request.addEventListener('load',function(){
//     const [data]=JSON.parse(this.responseText);
//     // console.log(data);

//     //render country 1
//     renderCountry(data);
    
//     //code for accessing the country 2 AJAX call for the country 2
//     const neighbour1= data.borders;
//     for ( let data2 of neighbour1){
//         let neighbour =  data2 ;
        

//     if (!neighbour) return;

//     //AJAX call for country 2
// // const countryData1=function(country){
//     const request2= new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
    
//     request2.addEventListener('load',function(){

//         const data2=JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2,'neighbour');
//     });
// }
// });
// };
// // countryAndNeighbour("USA");
// countryAndNeighbour("Thailand");


//using fetch API  and promises

// const request=fetch("https://restcountries.com/v2/name/Bharat");
// console.log(request);
const getCountryData=function(country){
   //using promise and normal function
// fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
// console.log(response);
// return response.json();
// }).then(function(data){
// console.log(data);
// renderCountry(data[0])
// })

///using fetch api and arrow function

fetch(`https://restcountries.com/v2/name/${country}`)
.then(response=>response.json())
.then(data=>{
    renderCountry(data[0]);
const neighbour1=data[0].borders;
console.log(neighbour1)
for (let nei of neighbour1){
    console.log(nei);
    const neighbour=nei;

if(!neighbour)  return;

//for country2
return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
}})



.then(response=>response.json())
.then(data=>renderCountry(data,'neighbour'));

};



getCountryData('Bharat');

