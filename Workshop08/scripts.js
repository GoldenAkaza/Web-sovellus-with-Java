//Exercise 1: JSON Basics

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Parse JSON into a JavaScript object
var data = JSON.parse(text);

// Function to display first and last names
function displayNames() {
let outputDiv = document.getElementById("output");
outputDiv.innerHTML = ""; // Clear previous content
data.employees.forEach(employee => {
    outputDiv.innerHTML += `<p>${employee.firstName} ${employee.lastName}</p>`;
});
}

// Function to display all data
function displayAllData() {
let outputDiv = document.getElementById("output");
outputDiv.innerHTML = ""; // Clear previous content
data.employees.forEach(employee => {
    outputDiv.innerHTML += `<p>First Name: ${employee.firstName}, Last Name: ${employee.lastName}</p>`;
});
}


//Execise 2: Parsing JSON from web

const apiUrl = 'https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750';

// Function to load raw JSON data and display it in the "rawdata" div
function loadRawData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display raw JSON data as a string
            document.getElementById('rawdata').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching raw data:', error));
}

// Function to load JSON data, parse it, and display it as a table
function loadParsedData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('parseddata');
            table.innerHTML = ''; // Clear previous content

            // Create table headers
            const headers = ['Poster', 'Title', 'Year', 'Type'];
            let headerRow = '<tr>';
            headers.forEach(header => {
                headerRow += `<th>${header}</th>`;
            });
            headerRow += '</tr>';
            table.innerHTML = headerRow;

            // Populate table rows with movie data
            data.Search.forEach(movie => {
                const row = `
                    <tr>
                        <td><img src="${movie.Poster}" alt="${movie.Title} Poster"></td>
                        <td>${movie.Title}</td>
                        <td>${movie.Year}</td>
                        <td>${movie.Type}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching parsed data:', error));
}


//Exercise 3: OpenWeatherMap API

const API_KEY = 'dae465540eabcab391613bad0d1823e2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Fetch weather by city name from the dropdown
function fetchWeatherByCity() {
    const city = document.getElementById('citySelector').value;
    if (city) {
        fetchWeather(city);
    }
}

// Fetch weather by user input
function fetchWeatherBySearch() {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeather(city);
    }
}

// Fetch weather data from OpenWeatherMap API
function fetchWeather(city) {
    const url = `${BASE_URL}?q=${city}&units=metric&APPID=${API_KEY}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}

// Display raw weather data
function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weatherData');
    weatherDiv.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Clouds:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}