var homeComponent = angular.module('components.home', [])
.component('home', require('./home/home.component'))
.config(require('./home.config'));

// require('./home.scss');

module.exports = homeComponent.name;
