console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
});

    const fetchWeather = async() => {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Mooresville';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Log the data to the console
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}
console.log(fetchWeather);

function displayWeather(weatherData) {
    // Extract the relevant data from the weatherData object
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    // Update the weather component elements with the fetched data
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">`;

    const weatherTemp = document.getElementById('weather-temp');
    weatherTemp.textContent = `${Math.round(temperature)}°`;

    const weatherDescription = document.getElementById('weather-description');
    weatherDescription.textContent = description;

    response.json().then(data => {
        console.log(data); // Log the response data for reference
        displayWeather(data); // Call the displayWeather function
    }).catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
