function AppHeaderController() {
  var ctrl = this;

  ctrl.logout = function logout() {
    ctrl.onLogout({
      $event: {
        logout: true
      }
    });
  };
}

module.exports = AppHeaderController;
