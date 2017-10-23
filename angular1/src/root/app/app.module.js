var app = angular.module('app', [
  'ngAnimate',
  'ngStorage',
  'ui.bootstrap',
  'ui.router'
])
.component('appHeader', require('./app-header/app-header.component'))
.component('appFooter', require('./app-footer/app-footer.component'))
.component('app', require('./app/app.component'))
.config(require('./app.config'))
.service('AppService', require('./app.service'));

module.exports = app.name;
