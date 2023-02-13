
const container = document.querySelector(".container");
const inputCity = document.getElementById("input-city");
const today_temp = document.querySelector(".today-temp");
const today_high_temp = document.querySelector(".today-high-temp");
const today_low_temp  = document.querySelector(".today-low-temp");
const today_humidity  = document.querySelector(".today-humidity");
const today_rain_chance = document.querySelector(".today-rain-chance");

let data;



// const getData = async (event) => {
//     event.preventDefault();
    // if (!inputCity.value) {
    //   alert("Please Enter The City Name: ");
    //   return;
    // }
  
    //
    // const city = inputCity.value;
  
    // Fetch Details
  
    // const fetchData = await fetch(
    //   `http://api.weatherapi.com/v1/current.json?key=4ef401b35b964cab89c120253231102&q=${city}`
    // );
  
    // const orgData = await fetchData.json();
    // data = orgData;
    // console.log(data);
  
    // Displaying the data in HTML
    // countryName.innerHTML = data.location.country;
    // stateName.innerHTML = data.location.region;
    // cityName.innerHTML = data.location.name;
    // today_humidity.innertext = data.current.humidity;
    // windSpeed.innerHTML = data.current.wind_kph;
    // today_temprature.innertext = data.current.temp_c;
    // logoImage.src = data.current.condition.icon;
    // weatherStatus.innerHTML = data.current.condition.text;
// };

// container.addEventListener("load",getData());