'use strict'

// page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
// page('/weather/input', ctx => app.Weather.fetchWeather(ctx.params.id, app.weatherView.initOutputPage))

page('/', () => app.weatherView.initHomePage);
page('/users/login', () => app.weatherView.initLoginPage);
page('/weather/form', () => app.weatherView.initFormPage);
page('/weather/output', () => app.weatherView.initOutputPage);

// page('*', '/');
page();