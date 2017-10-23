var feedComponent = angular.module('components.feed', [])
.component('feed', require('./feed/feed.component'))

module.exports = feedComponent.name;
