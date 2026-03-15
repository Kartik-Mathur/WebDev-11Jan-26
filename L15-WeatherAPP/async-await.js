let inp = document.getElementById('inp');
let btn = document.getElementById('btn');

function generateURL(lat, lon, API_KEY) {
    console.log(lat, lon, API_KEY);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    return url;
}

async function getWeather(data) {
    let lat = data.lat;
    let lon = data.lon;
    let url = generateURL(lat, lon, '68eb9a82e650df54c98feebbf88e20d7');
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function getLatAndLon(city_name, API_KEY) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_KEY}`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data[0];
    } catch (error) {
        throw new Error(error);
    }
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

btn.addEventListener('click', async (ev) => {
    let cityName = inp.value;
    let API_KEY = '68eb9a82e650df54c98feebbf88e20d7';

    try {
        let latLonData = await getLatAndLon(cityName, API_KEY);
        let weatherData = await getWeather(latLonData);

        addToDom(weatherData);
    } catch (error) {
        throw new Error(error);
    }
    // getLatAndLon(cityName, API_KEY)
    //     .then(getWeather)
    //     .then(data => {
    //         addToDom(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
})


