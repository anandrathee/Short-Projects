let searchBtn = document.querySelector(".search");
let input = document.querySelector("input");

let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let cityName = document.querySelector("#city");
let weather = document.querySelector("#weather");
let humidity = document.querySelector("#humidity");
let humidityVal = document.querySelector("#humidity-val");
let wind = document.querySelector("#wind");
let windVal = document.querySelector("#wind-val");
let img = document.querySelector("img");



function getData(cityName){
 return fetch(

        `http://api.weatherapi.com/v1/current.json?key=fe0e4cafafd948c5a5c131728240707&q=${cityName}&aqi=yes`
    )
    .then ((res)=>{
            return res.json()
    });    
}

searchBtn.addEventListener("click", ()=>{
    let value = input.value;
    getData(value).then((result)=>{

        date.textContent = result.location.localtime;
        temp.innerText = result.current.temp_c + "°C";
        cityName.innerText = result.location.name;
        weather.innerText = result.current.condition.text;
        humidityVal.innerText = result.current.humidity + "%";
        windVal.innerText = result.current.wind_kph + " kph";
        windVal.innerText = result.current.precip_mm + " mm";
        img.src = result.current.condition.icon;

    }).catch((error) => {
        console.error("Error fetching data: ", error);
      });  
   
})