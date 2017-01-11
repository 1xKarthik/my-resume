(function () {
  'use strict';

  angular
    .module('resume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock Activated');
    $rootScope.year = moment().year();
  }

})();
