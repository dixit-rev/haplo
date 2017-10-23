var root = angular.module('root', [
  require('./app/app.module'),
  require('./components/components.module'),
])
.component('root', require('./root/root.component'))

module.exports = root.name;
