'use strict'

// page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
// page('/weather/input', ctx => app.Weather.fetchWeather(ctx.params.id, app.weatherView.initOutputPage))

page('/', () => app.Weather(app.weatherView.initLoginPage));
page('/weather/form', () => app.Weather.initFormPage(app.Weather.submit));
page('/weather/output', () => app.weatherView.fetchWeather(app.weatherView.initOutputPage));

// page('*', '/');
page();