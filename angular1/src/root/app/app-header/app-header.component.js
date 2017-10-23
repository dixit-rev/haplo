module.exports = {
  bindings: {
    onLogout: '&',
    user: '<'
  },
  controller: require('./app-header.controller'),
  template: require('./app-header.html')
};
