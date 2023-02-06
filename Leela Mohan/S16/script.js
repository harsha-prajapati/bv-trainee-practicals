'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function (data, className = '') {    
    const html = `
    <article class="country ${className}"  >
        <a href="https:www.google.com/maps/place/${data.latlng}" target = "_blank">
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



const getCountryData = function (C) {
    fetch(`https://restcountries.com/v2/name/${C}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
