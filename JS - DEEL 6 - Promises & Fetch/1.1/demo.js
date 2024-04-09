fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.035269444&lon=5.36666667&units=metric&appid=b998a2def1149328b08a2b166b8175f7`)
.then(response => response.json())
.then(data => {
    document.getElementById('locatie').innerText = data.name;
    document.getElementById('temperatuur').innerText = data.main.temp + " °C";
    document.getElementById('vochtig').innerText = data.main.humidity + "%";
    document.getElementById('wind').innerText = (data.wind.speed * 3.6) + " km/h" ;
})
.catch(error => console.log(error));
