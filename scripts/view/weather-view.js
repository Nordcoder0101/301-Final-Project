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

    weatherView.initOutputPage = callback => {
        $('.container').hide();
        $('.output').show();
    };

    module.weatherView = weatherView;
})(app);