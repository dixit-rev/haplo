module.exports = {
  bindings: {
    fail: '<',
    formType: '<',
    onSubmit: '&',
    submitType: '<',
    success: '<',
    user: '<'
  },
  controller: require('./auth.controller'),
  template: require('./auth.html')
};
