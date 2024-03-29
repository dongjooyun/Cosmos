const weatherRefresh = document.querySelector("#refreshWeatherBtn");
const API_KEY = "efb90cccd925133f0431e6dda142358d";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            city.innerText = `📍 ${data.name}`;
            weather.innerHTML = `<hr class="my-2"> ${data.weather[0].description}
            <br>🌡&nbsp ${Math.round(data.main.temp)}˚C
            <br>💧&nbsp ${data.main.humidity}%`;
            city.classList.add("text-light");
            weather.classList.add("text-light");
        });
}
// <br>🏃‍♀️ ${Math.round(data.main.feels_like)}˚C
function onGeoError() {
    alert("DISCONNECTION: Can't find user location.")
}

function handleWeatherRefresh() {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}

handleWeatherRefresh();
weatherRefresh.addEventListener("click", handleWeatherRefresh);