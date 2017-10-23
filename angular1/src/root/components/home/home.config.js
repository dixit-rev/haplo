function HomeConfig($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      component: 'home',
      parent: 'app',
      url: '/'
    });
}

module.exports = HomeConfig;
