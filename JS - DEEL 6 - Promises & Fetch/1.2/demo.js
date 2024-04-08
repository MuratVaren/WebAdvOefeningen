function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=7ac3fb1fc67b1e3dc4ff6a7683a50823`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('locatie').innerText = data.name;
            document.getElementById('temperatuur').innerText = data.main.temp + " °C";
            document.getElementById('vochtig').innerText = data.main.humidity + "%";
            document.getElementById('wind').innerText = (data.wind.speed * 3.6) + " km/h" ;
        })
        .catch(error => console.log(error));
}
getLocation();

