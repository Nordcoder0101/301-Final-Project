'use strict';

page.base('/301-Final-Project');

page('/', app.weatherView.initHomePage);
page('/user', app.weatherView.initFormPage);
page('/output', app.weatherView.initOutputPage);
page('/about', app.weatherView.initAboutPage);
page('/login', app.weatherView.initLoginPage);
page('/register', app.weatherView.initRegistration);
page();