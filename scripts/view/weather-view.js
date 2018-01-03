var weatherView = {};

var app = app || {};

(function(module) {
    weatherView.initLoginPage = err => {
      $('.container').hide();
      $('.login').show();
      $('.form').on('submit', callback);
    };
    
    weatherView.initFormPage = callback => {
      $('.container').hide();
      $('.input').show();
      $('.form-two').on('submit', callback);
    };
    
    // weatherView.initOutputPage = function () {
    //   $('.container').hide();
    //   $('.output').show();
    // };
    
    weatherView.initLoginPage();
    weatherView.initFormPage();
    weatherView.initOutputPage();
    
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