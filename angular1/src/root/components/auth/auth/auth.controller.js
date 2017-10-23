function AuthController() {
  var ctrl = this;

  ctrl.$onChanges = function onChanges(changes) {
    var change, parent;

    for (change in changes) {
      if (changes.hasOwnProperty(change)) {
        parent = changes[change];
        ctrl[change] = angular.copy(parent.currentValue);
      }
    }
  };

  ctrl.submit = function submit(form) {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });

    resetComponent(form);
  };

  function resetComponent(form) {
    form.$setPristine();
  }

}

module.exports = AuthController;
