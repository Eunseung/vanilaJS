const weather = document.querySelector(".js-weather");
const API_KEY = 'a83b5ece5eac41b5a1ab242566b70b7f';
const COORDS = 'coords';

function getWeather(lat, lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then(function(response){
      return response.json();
      })
    .then(function(json){
      const temprature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temprature} @ ${place}`;
    });
}


function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("위치 정보에 접근할 수 없습니다.");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{
    const parsecoords = JSON.parse(loadedCoords);
    getWeather(parsecoords.latitude, parsecoords.longitude);
  }
}



function init(){
  loadCoords();
}
init();