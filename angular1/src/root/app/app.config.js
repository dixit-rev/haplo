function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      component: 'app',
      url: '/'
    });

  $urlRouterProvider.otherwise('/');
}

module.exports = AppConfig;
