'use strict';

var app = app || {};

let weather = [];
let __API_URL__ = 'https://accounts-weather-app.herokuapp.com';
// let __API_URL__ = 'http://localhost:3000'

function Weather(data, city) {
  this.temperature = data.currently.temperature;
  this.precipitation = data.currently.precipProbability;
  this.windspeed = data.currently.windSpeed;
  this.windgust = data.currently.windGust;
  this.cloudcover = data.currently.cloudCover * 100;
  this.summary = data.daily.summary;
  this.city = city;
  
};

Weather.prototype.toHtml = function(){
  let template = Handlebars.compile($('#weather-template').html());
  console.log('toHtml', template(this));
  return template(this);
};

function findAccounts(){
  $.get(`${__API_URL__}/api/v1/accounts`)
    .then(x => console.log(x[0]));
}

function appendWeather(data,city) {
    console.log(data, city)
  let ponyExpress = new Weather(data, city);
  console.log(ponyExpress);
  $('#weather-display').empty()
  $("#weather-display").append(ponyExpress.toHtml());
}

function findLocation(zip){

  console.log(zip)
  $.ajax({
    url: `${__API_URL__}/api/v1/location`,
    type: 'GET',
    data: {
      zip: zip,
    },
    success: function(results) {
      console.log(JSON.parse(results.text).results[0].formatted_address)
      let lat = JSON.parse(results.text).results[0].geometry.location.lat;
      let long = JSON.parse(results.text).results[0].geometry.location.lng;
      let city = JSON.parse(results.text).results[0].formatted_address

      updateWeather(lat,long, city)
    }
  });}


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
            if(data.length === 0){
                alert('incorrect name');
                return;
            }


      let userInfo = data[0];
      localStorage.setItem('user_info', JSON.stringify(userInfo))
      console.log(data)
      let resultName = data[0].name
      let resultPassword = data[0].password

      if(resultName===name && resultPassword===password){
        $("#login").hide()
        $("#register").hide()
        page('/output');
      }else {alert('incorrect password')}

    } 
    })}

  

  
function createAccount(name, zip, email, password){

  console.log(name, zip, email, password)
  $.ajax({
    url: `${__API_URL__}/api/v1/newaccount`,
    type: 'GET',
    data: {
      name: name,
      zip: zip,
      email: email,
      password: password
    },
    success: function(data) {
      console.log(data)
      if(data.rowCount !== 1){
        alert('User Already exists');
        return;
      }
      console.log('account created, initialize login')
      verifyAccounts(name,password);
    }
  });}


function updateWeather(lat, long, city) {
  console.log('lat: ',lat,'long: ',long);
  return $.getJSON(`${__API_URL__}/api/v1/weather`,{
    a: lat,
    b: long
  })
    .then(data => JSON.parse(data.text)) 
    .then(data => appendWeather(data, city))
    .then(() => console.log('done'));
};
