'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



// const url = https:www.google.com/maps/place/${data.name}/@${data.latlng}

{
    // const getCountryData = function(C) {
    //     const req = new XMLHttpRequest();
    //     req.open('GET', `https://restcountries.com/v2/name/${C}`);
    //     req.send(); 

    //     req.addEventListener('load', function(){
    //         // console.log(this.responseText);

    //         const [data] = JSON.parse(this.responseText);
    //         console.log(data);


    //         const html = `
    //         <article class="country">
    //             <img class="country__img" src="${data.flag}" />
    //             <div class="country__data">
    //                 <h3 class="country__name">${data.name}</h3>
    //                 <h4 class="country__region">${data.region}</h4>
    //                 <p class="country__row"><span>👫</span>${data.population}</p>
    //                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    //                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    //             </div>
    //         </article>`;

    //         countriesContainer.insertAdjacentHTML('beforeend', html);
    //         countriesContainer.style.opacity = 1;
    //     });
    // };

    // getCountryData('Bharat');
    // getCountryData('Bangladesh')

    // var map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
}


const renderCountry = function (data, className = '') {
    // const getMap = function () {
    //     const map = L.map('map').setView([data.latlng], 13);
    
    //     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    
    //     L.marker([data.latlng]).addTo(map)
    //         .bindPopup('')
    //         .openPopup();
    // }
    const html = `
    <article class="country ${className}"  >
        <a href="https:www.google.com/maps/place/${data.name}/@${data.latlng}" target = "_blank">
        <img class="country__img" src="${data.flag}" />
        </a>
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.nativeName}</h4>
            <h6 class="country__region">${data.capital}</h6>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
    btn.remove();

}

const renderErr = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

{
    // const getCountryAndNeighbour = function (C) {
    //     const req = new XMLHttpRequest();
    //     req.open('GET', `https://restcountries.com/v2/name/${C}`);
    //     req.send();

    //     req.addEventListener('load', function () {
    //         // console.log(this.responseText);

    //         const [data] = JSON.parse(this.responseText);
    //         console.log(data);

    //         renderCountry(data);

    //         //Neighbour

    //         const neighbour1 = data.borders;

    //         for (let each of neighbour1) {
    //             let neighbour = each
    //             if (!neighbour) return;

    //             // Call country with code

    //             const req2 = new XMLHttpRequest();
    //             req2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    //             req2.send();

    //             req2.addEventListener('load', function () {
    //                 const data2 = JSON.parse(this.responseText);
    //                 console.log(data2);

    //                 renderCountry(data2, 'neighbour')
    //             });

    //         }
    //         // console.log(data.borders.length);

    //     });
    // };

    // getCountryAndNeighbour('bharat');
    // getCountryAndNeighbour('germany');
    // getCountryAndNeighbour('portugal');

    // const getCountryData = function(C) {
    //     fetch(`https://restcountries.com/v2/name/${C}`)
    //     .then(function(response) {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then (function(data) {
    //         console.log(data);
    //         renderCountry(data[0])
    //     });
    //};
}

const getCountryData = function (C) {
    fetch(`https://restcountries.com/v2/name/${C}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // data1 = data[0];
            renderCountry(data[0]);
            // localStorage.setItem('coords', data[0].latlng);
            const neighbour = data[0].borders;

            for (let each of neighbour) {

                //country 2

                fetch(`https://restcountries.com/v2/alpha/${each}`)
                    .then(response => response.json())
                    .then(data =>
                        renderCountry(data, 'neighbour')
                    )

            }
        }).catch(err => {
            // console.error(`${err}`)
            renderErr(`Something went wrong - ${err.message}`)
        });
};



btn.addEventListener('click', function () {
    getCountryData('bharat')
});



{
    //cc1
    // const myLocation = function (lat, lng) {
    //     const url = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    //     url
    //         .then(res => {
    //             if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`);
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data);
    //             console.log(`Address - ${data.staddress}`);
    //             console.log(`${data.region}`);

    //             return fetch(`https://restcountries.com/v2/name/${data.country}`)
    //         })
    //         .then(res => {
    //             if (!res.ok) throw new Error(`Country not found (${res.status})`);
    //             return res.json();
    //         })
    //         .then(data => renderCountry(data[1]))
    //         .catch(e => console.error(`${e.message}`))
    // };

    // myLocation(23.0245559, 72.5646652);
    // myLocation(16.762775,81.652054);
    // myLocation(19.037, 72.873);


    // console.log('Start');
    // setTimeout(() => console.log('Zero Seconds TImer'), 0);
    // Promise.resolve('Resolved').then(res => console.log(res));
    // console.log('End')



    // new promise 

    // const lottery = new Promise(function(resolve, reject){
    //     if (Math.random() >= 0.5) {
    //         resolve('You WIN');
    //     } else {
    //         reject ('You Lost');
    //     }
    // });

    // lottery.then(res => console.log(res)
    // .catch(err => console.error(err)))
}

