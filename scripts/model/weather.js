'use strict'

let weather = [];

function Weather (rawDataObj) {
    this.wind = rawDataObj.wind;
    this.precipitation = rawDataObj.precipitations;
    this.temperature = rawDataObj.temperature;
    this.humidity = rawDataObj.humidity;
    this.pressure = rawDataObj.pressure;
}

Weather.prototype.toHtml = function(){
    let template = Handlebars.compile($('#weather-template').html())
    return template(this)
};