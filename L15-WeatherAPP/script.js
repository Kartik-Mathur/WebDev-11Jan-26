let inp = document.getElementById('inp');
let btn = document.getElementById('btn');

function generateURL(lat, lon, API_KEY) {
    console.log(lat, lon, API_KEY);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    return url;
}

function getWeather(data) {
    return new Promise((res, rej) => {
        let lat = data.lat;
        let lon = data.lon;
        let url = generateURL(lat, lon, '68eb9a82e650df54c98feebbf88e20d7');
        fetch(url)
            .then(res => res.json())
            .then(data => {
                res(data)
            })
            .catch(err => rej(err));
    })
}

function getLatAndLon(city_name, API_KEY) {
    return new Promise((res, rej) => {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_KEY}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Inside getLatAndLon", data[0]);
                res(data[0]);
            })
            .catch(err => rej(err));
    })
}

function addToDom(data) {
    let htmlContent = `
                <div class="location">${data.name}</div>
                    <div class="temp">${data.main.temp}°C</div>
                    <div class="weather-main">Clouds</div>
                    <div class="description">${data.weather[0].description}</div>
                    <div class="extra">
                        <div>
                            <span class="label">Wind:</span><br>
                            ${data.wind.speed} m/s
                        </div>
                        <div>
                            <span class="label">Country Code:</span><br>
                            ${data.sys.country}
                        </div>
                    </div>
                `

    let weatherDetails = document.getElementById('weather-details');
    weatherDetails.innerHTML = htmlContent;
}

btn.addEventListener('click', (ev) => {
    let cityName = inp.value;
    let API_KEY = '68eb9a82e650df54c98feebbf88e20d7';

    getLatAndLon(cityName, API_KEY)
        .then(getWeather)
        .then(data => {
            addToDom(data);
        })
        .catch(err => {
            console.log(err);
        })
})
