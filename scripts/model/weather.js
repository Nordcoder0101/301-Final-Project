'use strict'

var app = app || {};
var _API_URL_ = 'http://localhost:3000';

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

function findLocation(zip) {
    // return $.get('http://localhost:3000/api/v1/location')
    return $.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`)
    // .then(results => JSON.parse(results.responseText))
    .then(results => updateWeather(results.results[0].geometry.location.lat,results.results[0].geometry.location.lng))
    
}

function updateWeather(lat,long) {
    console.log('lat: ',lat,'long: ',long)
    return $.getJSON('http://localhost:3000/api/v1/weather',{
        a: lat,
        b: long
    })
    .then(data => JSON.parse(data.text)) 
    .then(data => appendWeather(data))
    .then(() => console.log('done'))
};

