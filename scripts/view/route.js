'use strict';

if (window.location.pathname !== '/'){
    page.base('301-Final-Project');
} 

// use this for local testing
// page('/', app.weatherView.initHomePage);
// page('/user', app.weatherView.initFormPage);
// page('/output', app.weatherView.initOutputPage);
// page('/about', app.weatherView.initAboutPage);
// page('/login', app.weatherView.initLoginPage);
// page('/register', app.weatherView.initRegistration);

//use this for github pages deployment
page('/', app.weatherView.initHomePage);
page('/user', app.weatherView.initFormPage);
page('/output', app.weatherView.initOutputPage);
page('/about', app.weatherView.initAboutPage);
page('/login', app.weatherView.initLoginPage);
page('/register', app.weatherView.initRegistration);
page();