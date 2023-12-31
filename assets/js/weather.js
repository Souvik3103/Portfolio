const selectedValue = document.getElementById('parameter');
const inputBox = document.getElementById('input')
const openApiUrl = "https://api.weatherapi.com/v1/current.json?key={apiKey}&q={query}&aqi={aqi}"
const openApiKey = "9fdaa82b3adc4d528ab133939232612"
var resultBox = document.getElementById('temperatureResult');
var fetchBtn = document.getElementById('getResult');
const aqiCheck = document.getElementById('aqiCheck');
const imgIco = document.getElementById('currentConditionIco');
var fetchRequest;
var data;
var lat, lon;


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        resultBox.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
  }




window.onload = function() {
    inputBox.setAttribute('placeholder', 'Enter Latitute Longitude: 48.8567,2.3508');
    getLocation();
    
}

//placeholder text and input box manipulation
selectedValue.addEventListener('change', (e) => {
    inputBox.value = "";
    resultBox.innerHTML = "";
    imgIco.src = "";
    aqiCheck.checked = false;
    console.log(e.target.value);

    switch (e.target.value) {
        case "currentLocation":
            inputBox.classList.add('hidden');
            break;
        case "cityName":
            inputBox.classList.remove('hidden');
            inputBox.setAttribute('placeholder', 'Enter City Name: Kolkata');
            break;
        case "LatLong":
            inputBox.classList.remove('hidden');
            inputBox.setAttribute('placeholder', 'Enter Latitute Longitude: 48.8567,2.3508');
            break;
        case "airportCode":
            inputBox.classList.remove('hidden');
            inputBox.setAttribute('placeholder', 'Enter Airport Code: CCU');
            break;
    }
    //
}
)

//waiting for 2 seconds to get the location of the user
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }

  //checking aqi data and fetching data
fetchBtn.addEventListener("click",async (e) => {
    var showAqi = "no";
    if (aqiCheck.checked){
        showAqi = "yes";
    }
    
    let latitude,longitude;
    switch (selectedValue.value) {
        case "currentLocation":
            const result = await resolveAfter2Seconds();
            latitude = lat;
            longitude = lon;
            fetchRequest =  openApiUrl.replace("{apiKey}", openApiKey).replace("{query}", latitude + "," + longitude).replace("{aqi}", showAqi); 
            break;
        case "cityName":
            fetchRequest = openApiUrl.replace("{apiKey}", openApiKey).replace("{query}", inputBox.value).replace("{aqi}", showAqi);
            break;
        case "LatLong":
            fetchRequest = openApiUrl.replace("{apiKey}", openApiKey).replace("{query}", inputBox.value).replace("{aqi}", showAqi);
            break;
        case "airportCode":
            fetchRequest = openApiUrl.replace("{apiKey}", openApiKey).replace("{query}", inputBox.value).replace("{aqi}", showAqi);
            break;
    }
        console.log(fetchRequest);
        response = fetch(fetchRequest);
        console.log(response);
        
        response.then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            data = data;
            displayData(data);
            imgIco.src = data.current.condition.icon
            
        })
})

function displayData(data) {
    console.log(data);
    resultBox.innerHTML = "Current Temperature: " + data.current.temp_c + "°C \nLast Updated: " + data.current.last_updated;
}






