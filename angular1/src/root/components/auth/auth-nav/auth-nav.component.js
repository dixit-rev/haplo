module.exports = {
  bindings: {
    formType: '<',
    onFormChange: '&'
  },
  controller: require('./auth-nav.controller'),
  template: require('./auth-nav.html')
};
