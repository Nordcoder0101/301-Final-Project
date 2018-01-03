var weatherView = {};

var app = app || {};

(function(module) {
    weatherView.initLoginPage = function () {
      $('.container').hide();
      $('.login').show();
      $('.form').on('submit');

      $('#login-submit').click(function(){ 
        weatherView.initFormPage();
      })

    };
    
    weatherView.initFormPage = function() {
      $('.container').hide();
      $('.input').show();
      $('#form-two').on('submit');

      $('#user-submit').click(function(){ 
        weatherView.initOutputPage();
      })      
    };
    
    weatherView.initOutputPage = function () {
      $('.container').hide();
      $('.output').show();
    };
    
    weatherView.initLoginPage();
    // weatherView.initFormPage();
    // weatherView.initOutputPage();
    
    module.weatherView = weatherView;
  })(app);


  function Weather(data) {
    this.temp = data.currently.temperature,
    this.windSpeed = data.currently.windSpeed,
    this.chancePrecipt = data.currently.precipProbability
  };
        
  function appendWeather(data) {
        // console.log(data)
        // console.log(data.currently)
        // console.log(data.currently.temperature)
        // console.log(data)
        ponyExpress = new Weather(data)
        console.log(ponyExpress)
        }