const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.71&lon=-74.14&units=metric&appid=f771cd494a6f864dd543b602fa3614bd'

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }   else {
            throw new Error(await response.text());
        }
    }   catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    captionDesc.textContent = desc;
}

const forecast = document.querySelector('#forecast');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.71&lon=-74.14&units=metric&appid=f771cd494a6f864dd543b602fa3614bd'

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (!response.ok) {
            const error = await response.text();
            throw new Error(await response.text());
        }
        
const data = await response.json();
        console.log("Forecast:", data);

        forecast.innerHTML = "";

        const days = data.list.filter(item =>
            item.dt_txt.includes("18:00:00")).slice(0, 4);

        const today = new Date().toLocaleDateString("en-CA", {
            timeZone: "America/Bogota"
        });

        const nextDays = days.filter(item =>
            item.dt_txt.slice(0, 10) > today
        ).slice(0, 3);

        nextDays.forEach(item => {
            const day = new Date(item.dt * 1000)
                .toLocaleDateString("en-US", {
                    weekday: "long",
                    timeZone: "America/Bogota"
                });

            const temp = Math.round(item.main.temp);

            const p = document.createElement("p");
            p.classList.add("forecast-day");
            p.textContent = `${day}: ${temp}°C`;

            forecast.appendChild(p);
        });

    } catch (error) {
        console.error("Forecast error:", error);
        forecast.textContent = "Unable to load forecast.";
    }
}

getForecast();