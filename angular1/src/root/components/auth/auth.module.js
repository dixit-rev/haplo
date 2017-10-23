var authComponent = angular.module('components.auth', [
  'ngIntlTelInput'
])
.component('auth', require('./auth/auth.component'))
.config(require('./auth/auth.config'))
.component('authNav', require('./auth-nav/auth-nav.component'))
.component('welcome', require('./welcome/welcome.component'))
.constant('AuthAPI', require('./auth.constant'))
.directive('passwordReveal',
  require('./password-reveal/password-reveal.directive')
)
.factory('AuthFactory', require('./auth.factory'));

module.exports = authComponent.name;
