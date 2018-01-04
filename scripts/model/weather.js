'use strict'

var app = app || {};

let weather = [];
let __API_URL__ = 'https://accounts-weather-app.herokuapp.com'
// let __API_URL__ = 'http://localhost:3000'

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

function findAccounts(){
  $.get(`${__API_URL__}/api/v1/accounts`)
    .then(x => console.log(x[0]))
}

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

function verifyAccounts(name, password){
    console.log(name,password)
    $.ajax({
        url: `${__API_URL__}/api/v1/verify`,
        type: 'GET',
        data: {
            name: name,
            password: password
        },
        success: function(data) {
            console.log ('name:',data[0].name.toString(), 'password: ', data[0].password.toString());
            let resultName = data[0].name
            let resultPassword = data[0].password

            if(resultName===name && resultPassword===password){
                alert("login succeeded");
                window.location = 'www.google.com'
            }else {alert('incorrect name or password try again')}
        }
    })}
  
function createNewAccount() {
  $.getJSON(`${__API_URL__}/api/v1/newaccount`)
    .then(() => console.log('Success!'));

}

function updateWeather(lat,long) {
  console.log('lat: ',lat,'long: ',long)
  return $.getJSON(`${__API_URL__}/api/v1/weather`,{
    a: lat,
    b: long
  })
    .then(data => JSON.parse(data.text)) 
    .then(data => appendWeather(data))
    .then(() => console.log('done'))
};
