var components = angular.module('components', [
  require('./auth/auth.module'),
  require('./feed/feed.module'),
  require('./home/home.module'),
  require('./message/message.module'),
  require('./post/post.module'),
  require('./suggest/suggest.module'),
  require('./trending/trending.module'),
  require('./user/user.module')
]);

module.exports = components.name;
