"use strict"
const date = new Date();
let weatherForecast={};
let today=document.querySelector('section .row .today .date p');
let secondDay=document.querySelector('section .row .secondDay .date p');
let thirdDay=document.querySelector('section .row .thirdDay .date p');
let datee=document.getElementById('date');
let city=document.querySelector('section .row .today .weather p');
let temperature=document.querySelector('section .row .today .weather .temp h1');
let desc=document.querySelector('section .row .today .weather span');
let todayIcon=document.querySelector('section .row .today .weather .temp img');
let searchInput=document.querySelector('section .container .secSub input');
let searchBtn=document.querySelector('section .container .secSub button');
switch(date.getDay()){
    case 0:
       today.innerHTML= 'Sunday';
       secondDay.innerHTML='Monday';
       thirdDay.innerHTML='Tuesday'
    break;
    case 1:
        today.innerHTML='Monday';
        secondDay.innerHTML='Tuesday';
        thirdDay.innerHTML='Wednesday';
    break;
    case 2:
        today.innerHTML='Tuesday';
        secondDay.innerHTML='Wednesday';
        thirdDay.innerHTML='Thursday';
    break;
    case 3:
        today.innerHTML='Wednesday';
        secondDay.innerHTML='Thursday';
        thirdDay.innerHTML='Friday';
    break;
    case 4:
        today.innerHTML='Thursday';
        secondDay.innerHTML='Friday';
        thirdDay.innerHTML='Saturday';
    break;
    case 5:
        today.innerHTML='Friday';
        secondDay.innerHTML='Saturday';
        thirdDay.innerHTML='Sunday';
    break;
    case 6:
        today.innerHTML='Saturday';
        secondDay.innerHTML='Sunday';
        thirdDay.innerHTML='Monday';
    break;
}
switch (date.getMonth()) {
    case 0:
        datee.innerHTML= date.getDay() + ' January'
        break;
    case 1:
        datee.innerHTML= date.getDay() + ' February'
        break;
    case 2:
        datee.innerHTML= date.getDay() + ' March'
        break;
    case 3:
        datee.innerHTML= date.getDay() + ' April'
        break;
    case 4:
        datee.innerHTML= date.getDay() + ' May'
        break;
    case 5:
        datee.innerHTML= date.getDay() + ' June'
        break;
    case 6:
        datee.innerHTML= date.getDay() + ' July'
        break;
    case 7:
        datee.innerHTML= date.getDay() + ' August'
        break;
    case 8:
        datee.innerHTML= date.getDay() + ' September'
        break;
    case 9:
        datee.innerHTML= date.getDay() + ' October'
        break;
    case 10:
        datee.innerHTML= date.getDay() + ' November'
        break;
    case 11:
        datee.innerHTML= date.getDay() + ' December'
        break;
    default:
        break;
}
//=============================================================
async function getWeather(region) {
    let apiRespons = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4e82d54b57aa402d99f121029233012&q=${region}&days=7`);
    weatherForecast = await apiRespons.json();
    city.innerHTML=weatherForecast.location.name;
    temperature.innerHTML=weatherForecast.current.temp_c;
    desc.innerHTML=weatherForecast.current.condition.text;
    todayIcon.setAttribute('src',weatherForecast.current.condition.icon);
    document.querySelector('section .row .secondDay img').setAttribute('src',weatherForecast.forecast.forecastday[1].day.condition.icon);
    document.querySelector('section .row .thirdDay img').setAttribute('src',weatherForecast.forecast.forecastday[2].day.condition.icon);
    document.querySelector('section .row .secondDay h3').innerHTML=weatherForecast.forecast.forecastday[1].day.maxtemp_c;
    document.querySelector('section .row .secondDay .m-0').innerHTML=weatherForecast.forecast.forecastday[1].day.mintemp_c;
    document.querySelector('section .row .thirdDay h3').innerHTML=weatherForecast.forecast.forecastday[2].day.maxtemp_c;
    document.querySelector('section .row .thirdDay .m-0').innerHTML=weatherForecast.forecast.forecastday[2].day.mintemp_c;
    document.getElementById('chanceOfRain').innerHTML=weatherForecast.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    console.log(weatherForecast);
}
window.addEventListener('load',function(){
    getWeather('cairo');
})
//==========================================================
// searchBtn.addEventListener('click',function(){
//     getWeather(searchInput.value.toLowerCase());
// })
//======================================================
searchInput.addEventListener('input',function(){
    getWeather(searchInput.value.toLowerCase());
});
//=======================================================
console.log(document.querySelector('section .row .secondDay img').src);