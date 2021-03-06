'use strict';



var app = app || {};

(function(module) {

  var weatherView = {};

  weatherView.initHomePage = function () {
    $('.container').hide();
    // $('#register').hide();
    $('#user').hide();
    $('.weatherhome').show();
  };
  
  weatherView.initLoginPage = function () {
    $('.container').hide();
    // $('#formview').show();
    $('.login').show();
    // $('.form').on('submit');
    $('#login-submit').click(function(e){ 
      e.preventDefault();
      verifyAccounts($('#username').val(), $('#password').val());
    });

  };
    
  weatherView.initRegistration = function () {
    console.log('did the thing');
    $('.container').hide();
    $('#registerview').show();
    $('#reg-user-submit').click(function(){ 
       
      createAccount($('#reg-username').val(), $('#reg-zipcode').val(), $('#reg-email').val(), $('#reg-password').val())
      console.log('submited user for validation');
    });
  };

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
    let zip = JSON.parse(localStorage.getItem('user_info')).zip
    console.log(zip)
    if(!$('#zipcode').val()) {
      findLocation(zip)
    }else{
      findLocation($('#zipcode').val())
    }
    $('.container').hide();
    $('.output').show();
    $('.weather-view').show();

  };

  weatherView.initAboutPage = function () {
    $('.container').hide();
    $('#about-us').show();
  };
    
  // weatherView.initRegistration();
  // weatherView.initLoginPage();
  // weatherView.initFormPage();
  // weatherView.initOutputPage();
  // weatherView.initAboutPage();
  // weatherView.initHomePage();
    
  module.weatherView = weatherView;
})(app);

        
