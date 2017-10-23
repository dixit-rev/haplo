var postComponent = angular.module('components.post', [
])
.component('post', require('./post/post.component'))

module.exports = postComponent.name;
