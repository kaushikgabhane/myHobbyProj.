
const container = document.querySelector(".container");
const hourlyForecast = document.querySelectorAll(".hourly-forecast-card");
const hourlyTemp = document.querySelectorAll(".hoursDetails :first-child");
const inputCity = document.getElementById("input-city");
const today_temp = document.querySelector(".today-temp var");
const today_feels_like = document.querySelector(".today-feels-like var");
const today_wind_speed  = document.querySelector(".today-wind-speed var");
const today_humidity  = document.querySelector(".today-humidity var");
const today_rain_chance = document.querySelector(".today-rain-chance var");
const weatherStatus = document.querySelector(".forecast-details h1");
const country = document.querySelector(".forecast-details :nth-child(2)");
const stateName = document.querySelector(".forecast-details :nth-child(3)");
const cityName = document.querySelector(".forecast-details :nth-child(4)");
const date = document.querySelector(".forecast-details :nth-child(5)");
const detailsIcon = document.querySelector(".forecast-img img");

let data;


const getData = async (event) => {
  event.preventDefault();
  if (!inputCity.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  
  const city = inputCity.value;

  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4ef401b35b964cab89c120253231102&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  today_humidity.textContent = data.current.humidity;
  today_temp.textContent = data.current.temp_c;
  today_feels_like.textContent = data.current.feelslike_c;
  today_wind_speed.textContent = data.current.wind_kph; 
  today_rain_chance.textContent = data.current.cloud;
  weatherStatus.innerHTML = data.current.condition.text;
  country.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  date.textContent = data.location.localtime;
  cityName.innerHTML = data.location.name;
  detailsIcon.setAttribute(`src`,`${data.current.condition.icon}`);


// Change Background

  const x = weatherStatus.innerHTML;

  if (x === 'Clear') {
    container.className = "clear";
  } 
  else if(x === 'Cloudy'){
    container.className = "cloudy";
  }
  else if(x === 'Mist'){
    container.className = "mist";
  }else if (x === 'Rain') {
    container.className = "rain";
  }else{
    container.className = 'container';
  }

    // Hourly forecast
    const forecastDetails = [...hourlyForecast];

    const hours = forecastDetails.map( ele => ele.firstElementChild);
    const icon = forecastDetails.map(ele => ele.firstElementChild.nextElementSibling);
    const htemp =[...hourlyTemp].map(ele => ele);
    // console.log(icon);
    // console.log(hours);
    // console.log(htemp);
    const fetchHourlyData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4ef401b35b964cab89c120253231102&q=${city}`);

    const hourlyData = await fetchHourlyData.json();
    const Data = hourlyData;
  
    
    for(let i=0; i<=24; i++){

      // for hourly time
      const y = Data.forecast.forecastday[0].hour[i].time;
      let z = y.split(" ")[1];
      hours[i].textContent = z;
      // console.log(hours[i]);

      // setting icon
      icon[i].setAttribute('src',`${Data.forecast.forecastday[0].hour[i].condition.icon}`);
      
      // setting hourly temp.
      htemp[i].textContent = Data.forecast.forecastday[0].hour[i].temp_c;
    }

};