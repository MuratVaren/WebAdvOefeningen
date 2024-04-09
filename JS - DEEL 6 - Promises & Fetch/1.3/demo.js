

const getCurrentLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
const showPosition = (position) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=b998a2def1149328b08a2b166b8175f7`)
        .then(response => response.json())
        .then(data => {
                document.getElementById('locatie').innerText = data.name;
                document.getElementById('temperatuur').innerText = data.main.temp + " °C";
                document.getElementById('vochtig').innerText = data.main.humidity + "%";
                document.getElementById('wind').innerText = (data.wind.speed * 3.6) + " km/h" ;
        })
}

const weathertokyo = () => {
    let position = {
        coords:{
            latitude: 35.6895,
            longitude: 139.6917
        }
    }
    showPosition(position)
}
const weatherVegas = () => {
    let position = {
        coords:{
            latitude: 36.1699 ,
            longitude: -115.1398
        }
    }
    showPosition(position)
}

const buttonCurrLocation = document.getElementById('here');
const buttonTokyo = document.getElementById('tokyo');
const buttonVegas = document.getElementById('vegas');

buttonCurrLocation.addEventListener("click",getCurrentLocation);

buttonTokyo.addEventListener('click',weathertokyo);
buttonVegas.addEventListener('click',weatherVegas);