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

        
