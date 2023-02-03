'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    let cords = [latitude, longitude];

    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    map = L.map('map').setView(cords, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://osm.org/images/logo.png">OpenStreetMap</a>',
    }).addTo(map);
    //setting the click on map

    map.on('click', function (mapE) {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  },
  function () {
    alert('Location access is not allowed');
  }
);

form.addEventListener('submit', function (e) {
  inputDistance.value = inputCadence.value = inputDuration.value=inputElevation.value='';
  e.preventDefault();
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        iconUrl: '',
        closeButton: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Work Out')
    .openPopup();
});

inputType.addEventListener('change',function(){
inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

