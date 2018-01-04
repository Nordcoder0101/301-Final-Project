'use strict'

// page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
// page('/weather/input', ctx => app.Weather.fetchWeather(ctx.params.id, app.weatherView.initOutputPage))

page('/', app.weatherView.initLoginPage);
page('/user', app.weatherView.initFormPage);
page('/output', app.weatherView.initOutputPage);
page('/about', app.weatherView.initAboutPage);
// page('*', '/');
page();