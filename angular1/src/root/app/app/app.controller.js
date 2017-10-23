function AppController(AppService, AuthFactory, UserFactory, $rootScope, $state) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    AppService.initializeStorage();
    ctrl.copyrightDate = new Date().getFullYear();
    ctrl.guest = false;
    ctrl.loading = true;
    ctrl.user = false;

    getUser();

  };

  ctrl.logout = function logout(event) {
    AuthFactory.logout();
  }

  function getUser() {
    // if user credentials are not found, getUser() returns null
    try {
      UserFactory.getUser()
      .then(function(user) {
        welcomeUser(user);
      })
      .catch(function(error) {
        welcomeGuest();
      })
    } catch (error) {
      welcomeGuest();
    }
  }

  function welcomeGuest() {
    ctrl.guest = true;
    ctrl.loading = false;
    ctrl.user = false;
  }

  function welcomeUser(user) {
    ctrl.guest = false;
    ctrl.loading = false;
    ctrl.user = user;
  }

  $rootScope.$on('user_state_change', function userStateChange(event, user) {
    getUser();
  })
}

module.exports = AppController;
