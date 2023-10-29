// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-temp-desc');
const forecastTemp = document.querySelector('#forecast');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=47.38&lon=18.92&appid=025e92de36ce7e6b1b684a4b13513ed1&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `${desc}`;
  }

  const forecast ='https://api.openweathermap.org/data/2.5/forecast?lat=47.38&lon=18.92&appid=025e92de36ce7e6b1b684a4b13513ed1&units=imperial';

  async function forecastFetch() {
    try {
      const response = await fetch(forecast);
      if (response.ok) {
        const forecastData = await response.json();
        //console.log(data); // testing only
        displayForecast(forecastData); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
forecastFetch();

function displayForecast(forecastData) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = (new Date()).getDay();

  
  
  for (let i = 0; i < 3; i++) {
    const dayTemp = document.createElement('span');
    dayTemp.innerHTML = `<br> &nbsp; &nbsp; ${dayNames[(today + 1 + i) % dayNames.length]}: ${forecastData.list[i].main.temp}&deg;F`;

    forecastTemp.appendChild(dayTemp);
  }

  
}

 
