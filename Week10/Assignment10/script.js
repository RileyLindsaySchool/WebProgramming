function loadWeather() {
    fetch("https://api.open-meteo.com/v1/free/point?place_id=london")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}