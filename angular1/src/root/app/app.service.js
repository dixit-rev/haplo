function AppService($localStorage) {

  this.initializeStorage = function initializeStorage() {
    if (!$localStorage.hasOwnProperty('uSTADIUM')) {
      $localStorage.uSTADIUM = {};
    }
  }
}

module.exports = AppService;
