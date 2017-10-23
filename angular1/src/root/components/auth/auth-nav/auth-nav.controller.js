function AuthNavController() {
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

  ctrl.changeForm = function changeForm(formType, submitType) {
    ctrl.onFormChange({
      $event: {
        formType: formType,
        submitType: submitType
      }
    });
  };

}

module.exports = AuthNavController;
