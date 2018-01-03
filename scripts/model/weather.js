'use strict'

let weather = [];

function Weather(data) {
    this.temperature = data.currently.temperature
    this.wind = data.currently.windSpeed
    this.precipitation = data.currently.precipProbability
  };

Weather.prototype.toHtml = function(){
    let template = Handlebars.compile($('#weather-template').html())
    console.log('toHtml', template(this))
    return template(this)
};

function appendWeather(data) {
    let ponyExpress = new Weather(data)
    $("#weather-display").append(ponyExpress.toHtml())
}


function updateWeather() {
    return $.getJSON('http://localhost:3000/api/v1/weather')
    .then(data => JSON.parse(data.text)) 
    .then(data => appendWeather(data))
    .then(() => console.log('done'))
};

