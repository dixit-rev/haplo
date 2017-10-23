// load all styles via root stylesheet
require('./root.module.scss');

angular
  .element(document)
  .ready(function blastOff() {
    angular.bootstrap(document, [require('./root.module')]);
  });
