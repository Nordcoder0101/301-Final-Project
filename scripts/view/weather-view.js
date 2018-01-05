'use strict';



var app = app || {};

(function(module) {

  var weatherView = {};

  weatherView.initHomePage = function () {
    $('.container').hide();
    $('#register').hide();
    $('#user').hide();
    // $('.form').hide();
  };
  
  weatherView.initLoginPage = function () {
    console.log('ran the thing');
    $('.container').hide();
    // $('#formview').show();
    $('.login').show();
    // $('.form').on('submit');
    $('#login-submit').click(function(){ 
      verifyAccounts($('#username').val(), $('#password').val());
    });

  };
    
  // weatherView.initRegistration = function () {
    
  // };

  weatherView.initFormPage = function() {
    console.log($('#username').val(), $('#password').val());
    verifyAccounts($('#username').val(), ($('#password')).val());
    $('.login').hide();
    $('#register').show();
    $('.container').hide();
    $('.input').show();
    $('#user-submit').click(function(){ 
      // weatherView.initOutputPage();
      verifyAccounts($('#username').val(), $('#password').val());
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
    $('#about-us').show();
  };
    
  // weatherView.initLoginPage();
  // weatherView.initFormPage();
  // weatherView.initOutputPage();
  // weatherView.initAboutPage();
  // weatherView.initHomePage();
    
  module.weatherView = weatherView;
})(app);

        
