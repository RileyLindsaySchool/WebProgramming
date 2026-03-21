// Add event listener to button
document.getElementById("weatherBtn").addEventListener("click", getWeather);

// Function to convert weather code to icon
function getWeatherIcon(code) {

  // Add conditions for weather codes

  if (code === 0) return "☀️";
  if (code >= 1 && code < 10) return "⛅";
  if (code >= 10 && code < 30) return "🌧️";
  if (code >= 30 && code < 50) return "🌫️";
  if (code >= 50 && code < 70) return "🌧️";
  if (code >= 70 && code < 90) return "❄️";
  if (code >= 90) return "⛈️";

  return "🌍"; // default icon
}

// Variable to store whether a specific error message is currently being displayed
let errorShown = false;

// Function to display error message
function showError(message) {
  const output = document.getElementById("output");
  output.innerHTML = `<p style='color:red;'>${message}</p>`;
  errorShown = true;
}

// Function to clear error message
function clearError() {
  const output = document.getElementById("output");
  output.innerHTML = "";
  errorShown = false;
}

async function getWeather() {

  const output = document.getElementById("output");

  // Clear error output
  clearError();

  // Step 1: Get city input
  let city = document.getElementById("city").value.trim();

  // If city is empty → show error message
  if (city === "") {
    showError("City cannot be blank.");
    return;
  }

  try {

    // Step 2: Call Geocoding API
    let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;

    let geoResponse = await fetch(geoURL);

    // Check if response is OK
    if (!geoResponse.ok) {
      showError("Unable to retrieve location.");
      return;
    }

    let geoData = await geoResponse.json();

    // Check if city exists in response
    if (geoData.results === undefined) {
      showError(`City "${city}" not found.`);
      return;
    }

    // Extract latitude and longitude
    let latitude = geoData.results[0].latitude;
    let longitude = geoData.results[0].longitude;
    let displayCity = city;

    // Step 3: Call Weather API
    let weatherURL =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
      `&temperature_unit=fahrenheit&wind_speed_unit=mph`;

    let weatherResponse = await fetch(weatherURL);

    // Check if response is OK
    if (!weatherResponse.ok) {
      showError("Unable to retrieve weather.");
    }

    let weatherData = await weatherResponse.json();

    // Extract required data:
    let tempF = weatherData.current.temperature_2m;
    let humidity = weatherData.current.relative_humidity_2m;
    let windMph = weatherData.current.wind_speed_10m;
    let weatherCode = weatherData.current.weather_code;

    // Get icon using function
    let icon = getWeatherIcon(weatherCode);

    // Step 4: Display output
    output.innerHTML = `
      <h3>📍 ${displayCity}</h3>
      <p>🌡 Temperature: ${tempF} °F</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>💨 Wind: ${windMph} mph</p>
      <p>🌥 Condition: ${icon}</p>
    `;

  } catch (error) {

    // Show generic error message if error occurred but no specific error message has already been displayed
    if (!errorShown)
      output.innerHTML = "<p style='color:red;'>Error fetching data</p>";
  }
}