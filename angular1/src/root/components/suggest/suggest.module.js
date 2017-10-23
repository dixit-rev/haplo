var suggestComponent = angular.module('components.suggest', [
])
.component('suggest', require('./suggest/suggest.component'))


module.exports = suggestComponent.name;
