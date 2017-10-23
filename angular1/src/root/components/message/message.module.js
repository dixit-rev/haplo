var messageComponent = angular.module('components.message', [
])
.component('message', require('./message/message.component'))

module.exports = messageComponent.name;
