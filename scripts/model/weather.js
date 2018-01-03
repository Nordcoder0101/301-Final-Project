'use strict'

let weather = [];

function Weather(data) {
    this.temperature = data.currently.temperature,
    this.wind = data.currently.windSpeed,
    this.precipitation = data.currently.precipProbability
  };

// Weather.prototype.toHtml = function(){
//     let template = Handlebars.compile($('#weather-template').html())
//     return template(this)
// };



function updateWeather(data) {
$.getJSON('http://localhost:3000/api/v1/weather')
.then(data => JSON.parse(data.text)) 
.then(data => appendWeather(data))
return 'done' 
};

Weather.prototype.toHtml = function() {
    let template = Handlebars.compile($('#weather-template').text())
    console.log(this)
    return template(this)};