'use strict';



var app = app || {};

(function(module) {

  var weatherView = {};
  
  weatherView.initLoginPage = function () {
    $('.container').hide();
    $('.login').show();
    $('.form').on('submit');

    $('#login-submit').click(function(){ 
      weatherView.initFormPage();
    });

  };
    
  weatherView.initFormPage = function() {
    $('.container').hide();
    $('.input').show();
    $('#user-submit').click(function(){ 
      weatherView.initOutputPage();
    });      
  };
    
  weatherView.initOutputPage = function () {
    findLocation($('#zipcode').val());
    $('.container').hide();
    $('.output').show();
    $('.weather-view').show();

  };

  weatherView.initAboutPage = function () {
    $('.container').hide();
    // $('.about').show();
    $('#about-us').show();
  };
    
  // weatherView.initLoginPage();
  // weatherView.initFormPage();
  // weatherView.initOutputPage();
  // weatherView.initAboutPage();
    
  module.weatherView = weatherView;
})(app);

        
