var userComponent = angular.module('components.user', [
])
.component('user', require('./user/user.component'))
.constant('UserAPI', require('./user.constant'))
.service('UserFactory', require('./user.factory'));


module.exports = userComponent.name;
