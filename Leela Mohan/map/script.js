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

// let map, mapEvent;

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10)

    constructor(coords, distance, duration) {
        this.coords = coords; //[lat, lng]
        this.distance = distance;
        this.duration = duration;
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration/60);
        return this.speed
    }
}


// const run = new Running([35, -20], 6.5, 24, 178);
// const cycling = new Cycling([35, -20], 25, 90, 500);

// console.log(run);
// console.log(cycling);


class App {
    #map;
    #mapEvent;

    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition (this._loadMap.bind(this), function () {
            alert('Could not get your position')
        });
    }

    _loadMap(position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`)
            const coords =[latitude, longitude]
            
            this.#map = L.map('map').setView(coords, 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
            
            this.#map.on('click', this._showForm.bind(this)) 
    }

    _showForm(mapEve) {
        this.#mapEvent = mapEve
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

    }

    _newWorkout(e) {
        e.preventDefault();
        
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        console.log(this.#mapEvent);
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat, lng]).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'runnig-popup',
                        
        })).setPopupContent('Here').openPopup();
    }
    
}

const app = new App();

    
