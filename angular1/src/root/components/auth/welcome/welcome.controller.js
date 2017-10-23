function WelcomeController(AuthFactory) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    ctrl.fail = '';
    ctrl.formType = 'login';
    ctrl.submitType = 'Login';
    ctrl.success = '';
    ctrl.user = {};
  };

  ctrl.authUser = function authUser(event) {
    var auth = AuthFactory[ctrl.formType],
        user = angular.copy(event.user);

    auth(user)
    .then(function(response) {
        setRequestStatus();
    })
    .catch(function(error) {
      setRequestStatus(error, ctrl.formType);
    })
  }

  ctrl.setFormType = function setFormType(event) {
    ctrl.formType = angular.copy(event.formType);
    ctrl.submitType = angular.copy(event.submitType);
    resetComponentState();
  }

  function resetComponentState() {
    ctrl.fail = '';
    ctrl.success = '';
    ctrl.user = {};
  }

  function setRequestStatus(error, formType) {
    ctrl.success = '';
    ctrl.fail = '';

    if (error) {
      ctrl.fail = AuthFactory.errorHandler(error, formType);
    } else {
      ctrl.success = AuthFactory.successHandler();
    }
  }
}

module.exports = WelcomeController;
